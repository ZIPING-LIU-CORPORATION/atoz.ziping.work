/// <reference types="cypress" />npm
import colors from "colors/safe";
import { reject } from "cypress/types/bluebird";

import configE from 'dotenv';

// configE.config(); not for production use

import request from "request";

export type EgregiousTweet = {
    msg: {
        msg: string;
        themes: keyof (typeof colors);
        newLine?: boolean;
    }[];
    date: string;
}

function giveKudosToAmazonCorpExecutives(length: number) {
  const kudosBuilder: string[] = new Array(length);
  const kudosStarLng = "🖕".length;
  const kudosStar = "🖕";
  for (let i = 0; i < Math.ceil(length); i += kudosStarLng) {
    kudosBuilder[i] = kudosStar;
  }

  return kudosBuilder.join("");
}

function canaryTweetTweet({value, key, valueEgregious}: {
    value:string,
    key:string,
    valueEgregious:EgregiousTweet
    
    }){

    return new Promise( (req, res) => {
        let tweetMedium = 'https://eoqbx6vepceb5g7.m.pipedream.net';
        if(process.env['TWEET_IT']){
            console.log(' ---------------- '+ colors.italic(`${colors.random('using secret found for phase 4')}`));
            tweetMedium = `${process.env['TWEET_IT']}`;
        } 

        request.post(tweetMedium,
            { json: {key, value, valueEgregious}},
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body);
                }
            }
        ).addListener('response', (data) => {
            req(data);
        });
    })
   
}

const tasks: Cypress.Tasks = {
  async cypressLogToNodeConsole(value: { key: string; value: any }) {
    const valueStr =
      value.value instanceof Object
        ? JSON.stringify(value.value, null, 2)
        : `${value.value}`;
    const dateSt = `${new Date().toDateString()} at ${new Date().toTimeString()}`;
    console.log(
      `\n\n    ${colors.bold(
        colors.zalgo("S")
      )}TART....TEST LOG MSG.........${colors.america(dateSt)}`
    );

    // @ts-ignore
    console.log(`    From Cypress HTML Dom Environment:\n`);
    const midPtLn = 8;
    const parts = 3;
        const getMidPt =  valueStr.length / parts + midPtLn <= valueStr.length ?   valueStr.length / parts  + midPtLn : 1;
    console.log(
      `       ["${value.key}"]: ` +
        colors.america(`${valueStr.slice(0, valueStr.length / parts)}`) +
        colors.zalgo(
          `${
            (valueStr.slice(valueStr.length / parts), getMidPt - ((getMidPt - 1)))
          }`
        ) +
        colors.random(
            `${
                valueStr.slice(getMidPt -  ((getMidPt - 1)), getMidPt)
            }`
          ) 
        +
        colors.america(
          `${
            getMidPt -2   <= valueStr.length
              ? valueStr.slice(getMidPt -2, getMidPt -1)
              : ""
          }`
        ) + colors.zalgo(valueStr.at(valueStr.length - 1) ||  '  🐣 ')
    );

    console.log(
      `\n\n       ${
        value.value?.includes("incorrect")
          ? colors.italic(`Looks like @lziping\'s work email and work account ${colors.rainbow(
              "IS STILL NOT FUCKING ")}`) + colors.bold(`${colors.cyan('AC')+colors.zalgo('T')+colors.cyan('IVE')} ${colors.random('AND WORKING YET')}\n`
            ) +
            colors.bold('       BECAUSE I GUESS SOME ') + `${colors.america(
              "SO CALLED FA")}${colors.zalgo("A")}NG LEVEL CORP "${colors.zebra('I')}${colors.zalgo('.')}${colors.zebra('T.')}" TEAMS DONT KNOW HOW TO FUCKING USE AN MICROSOFT OFFICE EXCHANGE SERVER\n` +
            `      ......How ${colors.strikethrough(
              "fucking"
            )}, if I dare say so myself as a canary.. EGR${colors.zalgo(
              "E"
            )}GIOUS`
          : ""
      }`
    );
    console.log(
      `    ${colors.bold(colors.zalgo("E"))}${colors.america("nd.......TEST LOG MSG .......")}${giveKudosToAmazonCorpExecutives(
        dateSt.length
      )}\n\n`
    );

    const egregiousTweetEnvelope = tweetItButDontAddressIt(
        {
            value: value.value,
            key: value.key,
            date: dateSt
        }
    );


    console.log( colors.bold('>>Performing Outside API Call to faciliate an Egregious Non-Canary Purposeful Posting of this Canary\'s '));
    console.log( colors.zalgo('    >>E') + colors.bold('gregious Finding') +colors.zalgo('s ') + colors.bold('as a true 🦚 taking its 🪶 in addressing the ') + 
    colors.america('already addresse') +colors.zalgo('d') +'\n\n');
    console.log( colors.zalgo('>>>>') + colors.bold('Ψ Pipedream Auto Placed Advertisement Start')); 

    return new Promise<EgregiousTweet | Error>((resold, rej)=> {
        canaryTweetTweet({
            key: value.key,
            value: valueStr,
            valueEgregious:egregiousTweetEnvelope
        }).then((res)=> {
            console.log(colors.zalgo('>>>>') + 'Ψ Pipedream Auto Placed Advertisement End\n');
            console.log("------------------" +colors.zalgo("U") + "sing 🎉" + colors.rainbow("Pipedream") + "🎉 " + colors.zalgo(" W") + colors.italic("orkflows to send realtime Egregious Tweet to Adam Selipk") + colors.zalgo("y")
            + colors.italic("@amazon.co") + colors.zalgo('m'));
            console.log("------------------" + colors.italic('Wow So sending a Post to')+colors.rainbow(' your ') + colors.bold('free'));
            console.log("------------------" + colors.america('I thought it was') +colors.bold(' free ') + colors.rainbow('request thingy automatically means I am now advertising for you?'));
            console.log("------------------" + colors.america('I mean I guess I am not paying for it so I guess I am the service fee to yuou then? My own tweeting abilities you just decided to log onto??'));
            console.log("------------------" + colors.italic('So me, now as a') + '🐣'+ colors.america(', canary... let me think on this, since I gotta look again at this canary tweet') +'🐤'+ colors.bold('for the') +colors.zalgo('not at all') + colors.rainbow('first time...., ') )
            console.log("------------------" + '🐥 ' + colors.rainbow('Pipe Dream you need to go get me paid, and '));
            console.log("------------------" + colors.bold('fucking tell Amazon to be the employer it was supposed to be') + colors.america('given') + " 🇺🇸 " + colors.america('and'))
            console.log("------------------" + colors.rainbow( '(due to the ') +colors.green('Employee Resource Centre HQ in India') + " 🇮🇳 "  + colors.zalgo('inc')+colors.italic('rporational requirements...'));
            resold(egregiousTweetEnvelope);
        }, (err)=> {
            rej(err);
        })
    
    })

  
  },


};

function tweetItButDontAddressIt(value:{
    value:any;
    key:string;
    date: string;
}):EgregiousTweet{
    
    const valueStr =
    value.value instanceof Object
      ? JSON.stringify(value.value, null, 2)
      : `${value.value}`;

      const midPtLn = 8;
      const parts = 3;
      const getMidPt =  valueStr.length / parts + midPtLn <= valueStr.length ?   valueStr.length / parts  + midPtLn : 1;
      const msgLines: EgregiousTweet["msg"] = [];
        msgLines.push(   {
            msg: `       ["${value.key}"]: ` ,
            themes: 'america',
            newLine: true
        });


        msgLines.push(   {  msg: `${valueStr.slice(0, valueStr.length / parts)}`,
            themes: 'america'
        });

        msgLines.push({
            msg: `${
                (valueStr.slice(valueStr.length / parts), getMidPt - (getMidPt / 2))
              }`,
              themes: 'zalgo'
        })

        msgLines.push({
            msg:   `${
                valueStr.slice(getMidPt -  (getMidPt / 2), getMidPt)
            }`,
            themes: 'zebra'
        });

        msgLines.push({
            msg:      `${
                getMidPt  <= valueStr.length
                  ? valueStr.slice((getMidPt))
                  : ""
              }`,
              themes: 'america'});

        msgLines.push({
            msg: `\nLooks like @lziping\'s work email and work account `,
            themes: 'blue',
            newLine: true
        });

        msgLines.push({
            msg:"IS STILL NOT FUCKING ACTIVE AND WORKING YET",
            themes: 'rainbow',
        });


        msgLines.push({
            msg: `BECAUSE I GUESS SOME `,
            themes: 'blue',
            newLine: true
            
        });

        msgLines.push({
            msg: "SO CALLED FAANG LEVEL CORP IT TEAMS",
            themes: 'america',
        });

        msgLines.push({

         msg: "DONT KNOW HOW TO FUCKING USE AN MICROSOFT OFFICE EXCHANGE SERVER\n",
            themes: 'blue',
        });

        msgLines.push({
            msg: "....How ",
            themes: 'blue',
            newLine: true
        });

        msgLines.push({
            msg: "fucking",
            themes: 'strikethrough',
        });
        
        msgLines.push({
            msg: ", if I dare say so myself as a canary.. ",    
            themes: 'blue',
        });

        msgLines.push({
            msg: "EGREGIOUS",
            themes: 'zebra',
        });

    
    

          return {
                msg: msgLines,
                date: value.date,
          }
   
}


export default tasks;
