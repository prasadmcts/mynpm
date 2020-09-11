var nools = require("nools");

var __dirname = ".";
var flow = nools.compile(__dirname + "/helloworld.nools");
  Message = flow.getDefined("message");

// var Message = function (message) {
//     this.text = message;
// };

// var flow = nools.flow("Hello World", function (flow) {
 
//     //find any message that is exactly hello world
//     flow.rule("Hello", [Message, "m", "m.text =~ /^hello\\sworld$/"], function (facts) {
//         facts.m.text = facts.m.text + " goodbye";
//         this.modify(facts.m);
//     });
 
//     //find all messages then end in goodbye
//     flow.rule("Goodbye", [Message, "m", "m.text =~ /.*goodbye$/"], function (facts) {
//         console.log(facts.m.text);
//     });
// });

// When you get a session from a flow no rules will be fired until the match method is called.

var session = flow.getSession();

//assert your different messages
 session.assert(new Message("goodbye"));
 session.assert(new Message("hello"));
 session.assert(new Message("hello world"));
 
//now fire the rules
session.match(function(err){
    if(err){
        console.error(err.stack);
    }else{
        console.log("done");
    }
})