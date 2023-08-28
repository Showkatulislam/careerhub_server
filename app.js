const express = require("express");
const cors = require("cors");
const router = require("./block.route");
const { getBlock, addBlock,deleteBlock } = require("./block.controler");

//#region initialize app
const app = express();
//#region setup middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome to you our sit");
});

app.get('/block',getBlock);
app.post("/block",addBlock);
app.delete("/block/:id",deleteBlock);

module.exports = app;

/* 
1	V2217	A2:DB:3F:48:AD:B4	192.168.1.101	01:42:01
2	V2043	72:3D:60:53:2B:03	192.168.1.103	01:31:49
3	vivo-1907	4A:E2:01:1B:5E:12	192.168.1.105	01:11:45
4	V2043	E4:F1:D4:E2:71:5D	192.168.1.106	01:42:07
5	android-6c259d366c8b
4a85	7C:1C:68:AE:1C:D8	192.168.1.107	01:51:04
6	DESKTOP-0HVUVD2	84:FD:D1:D9:85:1E	192.168.1.108	01:59:21
*/
