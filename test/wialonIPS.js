// Include Nodejs' net module.
const Net = require('net');
var fs = require('fs');

// The port number and hostname of the server.
const port = 6005;
const host = 'demo.agrocontrol.net';

var idx = 0;
var loginned = false;

var pointList = fs.readFileSync('points.txt', 'utf8').split('\n');
console.log(pointList,pointList.length);
// Create a new TCP client.
const client = new Net.Socket();
// Send a connection request to the server.
client.connect({ port: port, host: host }, function() {
    // If there is no error, the server has accepted the request and created a new
    // socket dedicated to us.
    console.log('TCP connection established with the server.');

    var data = '352353083489507'+';NA;';
    var crc = calc_crc16(data);

    var msg = '#L#'+data+crc.toString(16)+'\r\n';


    console.log(msg);
    // The client can now send data to the server by writing to its socket.
    client.write(msg);



});

// The client can also receive data from the server by reading from its socket.
client.on('data', function(chunk) {
    console.log(`Data received from the server: ${chunk.toString()}.`);
    if (chunk.toString()=='#AL#1\r\n'){
        console.log('login ok');
        loginned = true;
    }

    if (!loginned){
        client.end();
    }

    setTimeout(sendMessage, 900);

    // Request an end to the connection after the data has been received.
    //client.end();
});

client.on('end', function() {
    console.log('Requested an end to the TCP connection');
});

function sendMessage(){

//console.log('time='+time);

    //var gps = DecimalToNMEAConverter(49.439556958940855,32.0496940612793);

    command = "#D#";
//	data = date+";"+time+";"+lat1+";"+lat2+";"+lon1+";"+lon2+";"+speed+";"+course+";"+height+";"+sats+";"+hdop+";"+inputs+";"+outputs+";"+adc+";"+ibutton+";"+params+";";
    var row = pointList[idx];
    if (!row){return;}
    row = row.replace('\r','').replace('\n','');

    // console.log('message='+row);

    var re = /;(.+?);/g;
    var arr = row.split('|');
    // row = arr[3];
    var gps = DecimalToNMEAConverter(arr[6],arr[7]);

    console.log('sendMessage');
    // var dt = new Date(arr[5]*1000);
    var dt = new Date()
    var mm = dt.getMonth() + 1;
    var dd = dt.getDate();
    var date = (dd>9 ? '' : '0') + dd + (mm>9 ? '' : '0') + mm+dt.getFullYear();
//console.log("date="+date);
    var hour = dt.getHours()-3;
    var min = dt.getMinutes();
    var sec = dt.getSeconds();
    var time = (hour>9 ? '' : '0') + hour+(min>9 ? '' : '0') + min+(sec>9 ? '' : '0') + sec;
    console.log(date)
    console.log(time)

    console.log(arr[6])
    data = date+';'+time+';'+gps[0]+';N;'+gps[1]+';E;'+arr[8]+';'+arr[9]+';'+arr[10]+';'+arr[11]+';'+arr[12]+';NA;NA;NA;NA;' +arr[17].split(";").join(",").replace('\'', '').replace('\'', '');//0;0;0;12;0;;;;;pa1:3:1,par2:3:2;';
    console.log(data)
    crc = calc_crc16(data);
    client.write(command+data+crc+'\r\n');

    if (idx>=pointList.length){
        client.end();
    }

    idx++;

}

function DecimalToNMEAConverter(lat, lng) {
    var dcmLatString = null;
    var latDegree = 0;
    var latMinutes = 0, dcmLat = 0, absLat = 0;

    var dcmLngString = null;
    var lngDegree = 0;
    var lngMinutes = 0, dcmLng = 0, absLng = 0;

    if (lat < 0) {
        absLat = lat * -1;
    } else {
        absLat = lat;
    }

    latDegree = parseInt(absLat);
    latMinutes = (absLat - latDegree) * 60;
    dcmLatString = latDegree+'' + ((latMinutes<10 ? "0" : "") +''+latMinutes);
    dcmLat = parseFloat(dcmLatString);
    dcmLat = Math.round(dcmLat * 10000.0) / 10000.0;

    if (lat < 0) {
        dcmLat *= -1;
    }
    // ************************************************//
    if (lng < 0) {
        absLng = lng * -1;
    } else {
        absLng = lng;
    }

    lngDegree = parseInt(absLng);
    lngMinutes = (absLng - lngDegree) * 60;
    dcmLngString = lngDegree +''+ ((lngMinutes<10 ? "0":"") +''+ lngMinutes);
    dcmLng = parseFloat(dcmLngString);
    dcmLng = Math.round(dcmLng * 10000.0) / 10000.0;

    if (lng < 0) {
        dcmLng *= -1;
    }
//console.log("NMEA Lat: " + dcmLat + " Lng: " + dcmLng);
    return [dcmLat,dcmLng];
//	return (new double[] { dcmLat, dcmLng });
}


function calc_crc16(data) {

    var crc16_table = [0x0000,0xC0C1,0xC181,0x0140,0xC301,0x03C0,0x0280,0xC241,
        0xC601,0x06C0,0x0780,0xC741,0x0500,0xC5C1,0xC481,0x0440,
        0xCC01,0x0CC0,0x0D80,0xCD41,0x0F00,0xCFC1,0xCE81,0x0E40,
        0x0A00,0xCAC1,0xCB81,0x0B40,0xC901,0x09C0,0x0880,0xC841,
        0xD801,0x18C0,0x1980,0xD941,0x1B00,0xDBC1,0xDA81,0x1A40,
        0x1E00,0xDEC1,0xDF81,0x1F40,0xDD01,0x1DC0,0x1C80,0xDC41,
        0x1400,0xD4C1,0xD581,0x1540,0xD701,0x17C0,0x1680,0xD641,
        0xD201,0x12C0,0x1380,0xD341,0x1100,0xD1C1,0xD081,0x1040,
        0xF001,0x30C0,0x3180,0xF141,0x3300,0xF3C1,0xF281,0x3240,
        0x3600,0xF6C1,0xF781,0x3740,0xF501,0x35C0,0x3480,0xF441,
        0x3C00,0xFCC1,0xFD81,0x3D40,0xFF01,0x3FC0,0x3E80,0xFE41,
        0xFA01,0x3AC0,0x3B80,0xFB41,0x3900,0xF9C1,0xF881,0x3840,
        0x2800,0xE8C1,0xE981,0x2940,0xEB01,0x2BC0,0x2A80,0xEA41,
        0xEE01,0x2EC0,0x2F80,0xEF41,0x2D00,0xEDC1,0xEC81,0x2C40,
        0xE401,0x24C0,0x2580,0xE541,0x2700,0xE7C1,0xE681,0x2640,
        0x2200,0xE2C1,0xE381,0x2340,0xE101,0x21C0,0x2080,0xE041,
        0xA001,0x60C0,0x6180,0xA141,0x6300,0xA3C1,0xA281,0x6240,
        0x6600,0xA6C1,0xA781,0x6740,0xA501,0x65C0,0x6480,0xA441,
        0x6C00,0xACC1,0xAD81,0x6D40,0xAF01,0x6FC0,0x6E80,0xAE41,
        0xAA01,0x6AC0,0x6B80,0xAB41,0x6900,0xA9C1,0xA881,0x6840,
        0x7800,0xB8C1,0xB981,0x7940,0xBB01,0x7BC0,0x7A80,0xBA41,
        0xBE01,0x7EC0,0x7F80,0xBF41,0x7D00,0xBDC1,0xBC81,0x7C40,
        0xB401,0x74C0,0x7580,0xB541,0x7700,0xB7C1,0xB681,0x7640,
        0x7200,0xB2C1,0xB381,0x7340,0xB101,0x71C0,0x7080,0xB041,
        0x5000,0x90C1,0x9181,0x5140,0x9301,0x53C0,0x5280,0x9241,
        0x9601,0x56C0,0x5780,0x9741,0x5500,0x95C1,0x9481,0x5440,
        0x9C01,0x5CC0,0x5D80,0x9D41,0x5F00,0x9FC1,0x9E81,0x5E40,
        0x5A00,0x9AC1,0x9B81,0x5B40,0x9901,0x59C0,0x5880,0x9841,
        0x8801,0x48C0,0x4980,0x8941,0x4B00,0x8BC1,0x8A81,0x4A40,
        0x4E00,0x8EC1,0x8F81,0x4F40,0x8D01,0x4DC0,0x4C80,0x8C41,
        0x4400,0x84C1,0x8581,0x4540,0x8701,0x47C0,0x4680,0x8641,
        0x8201,0x42C0,0x4380,0x8341,0x4100,0x81C1,0x8081,0x4040];

    var utf8 = unescape(encodeURIComponent(data));

    var crc = 0x0000;
    for (var i = 0; i < utf8.length; i++) {
        crc = (crc >>> 8) ^ crc16_table[(crc ^ utf8.charCodeAt(i)) & 0xff];
    }

    //byte[] bytes = data.getBytes();
    //var bytes = Buffer.from(data);
    //var buffer = new Buffer([0x4, 0xFF, 0x01, 0x20, 0x0])
    //for (byte b : bytes) {
    //crc = (crc >>> 8) ^ crc16_table[(crc ^ b) & 0xff];
    //}

    return crc;
}
