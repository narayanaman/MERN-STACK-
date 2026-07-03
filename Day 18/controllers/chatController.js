const OpenAI = require("openai");
const Chat = require("../models/Chat");


const askQuestion = async(req,res)=>{
    try{
        const client = new OpenAI({apiKey: process.env.OPENAI_KEY?.trim(),
            baseURL:"https://openrouter.ai/api/v1/"
        });
        const {question}=req.body;
        if(!question){
            return res.status(404).json({
                success:false,
                message:"Question is required"
            });
        }
        const response = await client.chat.completions.create({
            model : "openai/gpt-4o-mini",
            messages:[
                {
                    role:"system",
                    content:"You are a helpfull teacher for beginner students. Explain the answer in simple Hinglish Language with exaple."
                },
                {
                    role:"user",
                    content:question
                }
            ]
        });
        const answer = response.choices[0].message.content;


        // const response = await client.response.create({
        //     model : "gpt-5.41",
        //     input : `You are a helpfull teacher for beginner students. Explain the answer in simple Hinglish Language with exaple . Question : ${question}`
        // });
        // const answer= response.output_text;
        const chat=await Chat.create({question,answer});
        res.status(201).json({
            success:true,
            message:"Answer Generated",
            data:chat
        });
    }
    catch(err){
        console.log("ASK Question error",err);
        res.status(500).json({
            success:false,
            message:"Failed to Answer Question"
        });
    }
};

const getAllChats = async(req,res)=>{
    try{
            const chats=(await Chat.find()).toSorted({createdAt : -1});

            res.status(201).json({
                success:true,
                total:chats.length,
                data:chats
            });
    }
    catch(err){
        console.log("Unable to Loads Chats",err);
        res.status(501).json({
            success:false,
            message:"Unable to get Chat Logs"
        });
    }
};

const deleteAllChats = async (req,res)=>{
    try{
        await Chat.deleteMany();
        res.status(200).json({
            success:true,
            message:"All Chats Deleted"
        });
    }

    catch(err){
        console.log("Unable to Delete Chats",err);
        res.status(500).json({
            success:false,
            message:"Unable to delete Chats"
        });
    }
};

module.exports={askQuestion,getAllChats,deleteAllChats};
