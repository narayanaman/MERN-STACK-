const { Client, LocalAuth } = require("whatsapp-web.js");

const Setting = require("../models/Setting");
const Enquiry = require("../models/Enquiry");
const { generateAIReplay } = require("./aiService");

const clients = {};

const startWhatsappClient = (collegeId, io) => {
  if (client[collegeId]) {
    return {
      status: "already_started",
      message: "Whatsapp Client Already Started",
    };
  }

  const client = new Client({
    authStrategy: new LocalAuth({ clientId: collegeId }),
    puppeteer: {
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  });
  clients[collegeId] = client;
  client.on("qr", (qr) => {
    console.log("QR Generated for ", collegeId);
    io.to(collegeId).emit("qr", qr);
  });

  client.on("ready", () => {
    console.log("Whatsapp Ready for ", collegeId);
    io.to(collegeId).emit("ready", {
      message: "Whatsapp Connected Successfully",
    });
  });
  client.on("authenticated", () => {
    console.log("Whatsapp Authenticated");
    io.to(collegeId).emit("authenticated", {
      message: "Whatsapp Authenticated",
    });
  });

  client.on("disconnected", () => {
    console.log("Whatsapp Discoonected", collegeId);
    io.to(collegeId).emit("disconnected", {
      message: "Whatsapp Disconnected",
    });
    delete clients[collegeId];
  });
  client.on("message", async (message) => {
    try {
      if (message.from.includes("@g.us")) return;

      const studentPhone = message.from;
      const studentText = message.body;

      const setting = await Setting.findOne({ collegeId });
      if (!setting) {
        await message.replay("College Setting Unavailable");
        return;
      }
      let enquiry = await Enquiry.findOne({ collegeId, studentPhone });
      if (!enquiry) {
        enquiry = await Enquiry.create({
          collegeId,
          studentPhone,
          message: [],
        });
      }

      enquiry.message.push({
        sender: "student",
        text: studentText,
      });

      let Replay = await generateAIReplay(setting, studentText);
      enquiry.message.push({
        sender: "ai",
        text: aiReplay,
      });
      enquiry.summary = `Student asked about admission , Latest Message : ${studentText}`;
      await enquiry.save();
      await message.replay(aiReplay);
    } catch (err) {
      console.log("Whatsapp Error :", err.message);
    }
  });
  client.initialize();
  return{
    status:"starting",
    message:"Whatsapp client Starting"
  };

};

module.exports = {startWhatsappClient,clients};

