const axios = require("axios");

exports.generateAIReplay = async (setting, studentMessage) => {
  try {
    const finalPrompt = `You are an Admisson Councellor for a college .
        College Name: ${setting.collegeName || ""}
        Courses : ${setting.courses || ""}
        Fees : ${setting.fees || ""}
        Admission Process:${setting.admissionProcess || ""}
        Contact Info:${setting.contactInfo || ""}
        Extra Instructions :${setting.systemPrompt || ""}
        Student Message :${studentMessage || ""}
        replay in simple helpful Hinglish or Hindi . Keep replay short and
         admission-focused.`;

    if (process.env.AI_PROVIDER === "openrouter") {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model:process.env.AI_MODEL,
          message: [
            {
              role: user,
              content: finalPrompt,
            },
          ],
        },
        {
          header: {
            Authorization:`Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type":"application/json",
          },
        },
      );
      return response.data.choices[0].message.content;

    }
    return "Thank You for Contacting Us . Please share which Course you are Interested in."
  } catch (err) {
    console.log("AI ERROR", err.message);
    return "Sorry , we are currently unavailable , will contact you Soon";
  }
};
