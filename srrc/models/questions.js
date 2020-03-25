const mongoose = require('mongoose')
const questionsSchema = new mongoose.Schema({
    urgent:{
        type:Boolean,
        default:false
    },
    date : Date,
    raise_request:{
        type:Boolean,
        default:false
    },
    email : String,
    answered : {
        type:Boolean,
        default:false
    },
    points:{
        type:Number
    },
    nAnswer:{
        type:Number,
        default:0
    },
    question:String
});
questionsSchema.statics.postQuestion = async function(question,email,points){
    const questionn = new Question({question:question,email:email,points:points});
    await questionn.save();
    
};
questionsSchema.methods.createUrgency = async function(){
    const question = this;
    question.urgent = true;
    await question.save()
}
questionsSchema.statics.getQuestions = async function(email){
    const questions = await Question.find({email})
    return questions
}
questionsSchema.statics.getAllQuestions = async function(n){
    console.log('fytr',n)
    const questions = await Question.find().limit(parseInt(n));
    return questions
}
questionsSchema.methods.raiseRequest = async function(){
    console.log("raising request")
    const question = this
    question.raise_request = true
    console.log(question.raise_request);
    await question.save();
}
const Question = new mongoose.model('Questions',questionsSchema);
module.exports = Question;
