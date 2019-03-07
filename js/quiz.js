conHandler = document.getElementById('con');
            hHandler = document.getElementById('h');
            btnHandler = document.getElementById('btn');
            btn1Handler = document.getElementById('btn1');
            btn2Handler = document.getElementById('btn2');
            btn3Handler = document.getElementById('btn3');

            var questions = [
                {
                    question:"Which function among the following lets to register a function to be invoked once?",
                    option1:'setTimeout',
                    option2:'setInterval',
                    option3:'setTerminal',
                    answer:'setTimeout'
                },
                {
                    question:"Which method receives the return value of setInterval() to cancel future invocations?",
                    option1:'clear Invoce',
                    option2:'clearInterval()',
                    option3:'clearTerminal',
                    answer:'clearInterval()'
                },
                {
                    question:"Which built-in method removes the last element from an array and returns that element?",
                    option1:'last()',
                    option2:'get()',
                    option3:'pop()',
                    answer:'pop()'
                },
                {
                    question:"Which of the following function of String object extracts a section of a string and returns a new string?",
                    option1:'slice()',
                    option2:'split()',
                    option3:'search()',
                    answer:'slice()'
                },
                {
                    question:"Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function?",
                    option1:'reverse()',
                    option2:'shift()',
                    option3:'some()',
                    answer:'some()'
                },
                {
                    question:"The “var” and “function” are?",
                    option1:'Keywords',
                    option2:'Declarations statements',
                    option3:'Data types',
                    answer:'Declarations statements'
                },
                {
                    question:"The JavaScript’s syntax calling ( or executing ) a function or method is called",
                    option1:'Primary expression',
                    option2:'Functional expression',
                    option3:'Invocation expression',
                    answer:'Invocation expression'
                },
                {
                    question:"The setTimeout() belongs to which object?",
                    option1:'Element',
                    option2:'Window',
                    option3:'Location',
                    answer:'Window'
                },
                {
                    question:"The method or operator used to identify the array is",
                    option1:'isarrayType()',
                    option2:'typeof',
                    option3:'type()',
                    answer:'typeof'
                },
                {
                    question:"One of the following syntax is not correct",
                    option1:'document.getelementbyId()',
                    option2:'document.getElementById()',
                    option3:'Document.getElementById()',
                    answer:'document.getElementById()'
                },
                {
                    question:"Thank you for trying!!!",
                    option1:'Click on',
                    option2:'SHOW button',
                    option3:'to know your marks',
                    answer:'*********'
                }
            ];
            

            window.addEventListener('load', function(){  
                // console.log(localStorage.getItem("storageName"));
                var name = localStorage.getItem("storageName");
                var i = 0;
                var count = 0;
                btnHandler.addEventListener('click',function(){
                    if(i < 11)
                    {
                        btn1Handler.setAttribute('class','btn btn-outline-danger btn-lg');
                        btn2Handler.setAttribute('class','btn btn-outline-danger btn-lg');
                        btn3Handler.setAttribute('class','btn btn-outline-danger btn-lg');
                        btn1Handler.disabled = false;
                        btn2Handler.disabled = false;
                        btn3Handler.disabled = false;
                        btnHandler.innerHTML = "SUBMIT";
                        hHandler.innerHTML = "";
                        btn1Handler.innerHTML = "";
                        btn2Handler.innerHTML = "";
                        btn3Handler.innerHTML = "";
                        var htxt = document.createTextNode(questions[i].question);
                        var btn1Handlertxt = document.createTextNode(questions[i].option1);
                        var btn2Handlertxt = document.createTextNode(questions[i].option2);
                        var btn3Handlertxt = document.createTextNode(questions[i].option3);
                
                        hHandler.appendChild(htxt);
                        btn1Handler.appendChild(btn1Handlertxt);
                        btn2Handler.appendChild(btn2Handlertxt);
                        btn3Handler.appendChild(btn3Handlertxt);
                        console.log(i);
                        
                    }  
                    else{
                        btnHandler.innerHTML = "******";
                        btnHandler.disabled = true;
                        btn1Handler.disabled = true;
                        btn2Handler.disabled = true;
                        btn3Handler.disabled = true;
                        if(count <= 5)
                        {
                            responsiveVoice.speak(`You should start studying ${name}`);
                        }
                        else if(count > 5 && count <= 8)
                        {
                            responsiveVoice.speak(`Good Job ${name} try to score more marks next time`);
                        }
                        else if(count ===  9)
                        {
                            responsiveVoice.speak(`Excellent ${name} try to score full marks next time`);
                        }
                        else{
                            responsiveVoice.speak(`Congratulation ${name} you have scored 10 on 10`);
                        }
                        swal(`Here's your score ${name.charAt(0).toUpperCase() + name.slice(1,name.length)}!`, `${count} out of ${questions.length-1}.`,{
                            buttons: {
                                cancel: "OK!",
                                catch: {
                                    text: "Wanna Try Again!!!",
                                    value: "catch"
                                }
                            },
                        })
                        .then((value) => {
                        switch (value){
                            case "catch": 
                            swal("Gotcha!","Get ready to play one more time!!!","success")
                            .then(function(){
                                location.reload();
                            });
                        }
                        });
                    }
                    if(i == 10)
                    {
                        btn1Handler.disabled = true;
                        btn2Handler.disabled = true;
                        btn3Handler.disabled = true;
                        btnHandler.innerHTML = "SHOW";
                    }
                    i++;
                });

                btn1Handler.addEventListener('click', function(){
                    btn1Handler.setAttribute('class','btn btn-danger btn-lg');
                    btn2Handler.disabled = true;
                    btn3Handler.disabled = true;
                    ans = btn1Handler.innerHTML;
                    console.log(ans);
                    console.log(questions[i-1].answer);
                    if(ans === questions[i-1].answer)
                    {
                        responsiveVoice.speak(`Congratulation your answer is correct`);
                        count++;
                    }
                    else{
                        responsiveVoice.speak(`Sorry the correct answer was ${questions[i-1].answer}`);
                    }
                    console.log(count);
                });

                btn2Handler.addEventListener('click', function(){
                    btn2Handler.setAttribute('class','btn btn-danger btn-lg');
                    btn1Handler.disabled = true;
                    btn3Handler.disabled = true;
                    ans = btn2Handler.innerHTML;
                    console.log(ans);
                    console.log(questions[i-1].answer);
                    if(ans === questions[i-1].answer)
                    {
                        count++;
                        responsiveVoice.speak(`Congratulation your answer is correct`);
                    }
                    else{
                        responsiveVoice.speak(`Sorry the correct answer was ${questions[i-1].answer}`);
                    }
                    console.log(count);
                });


                btn3Handler.addEventListener('click', function(){
                    btn3Handler.setAttribute('class','btn btn-danger btn-lg');
                    btn1Handler.disabled = true;
                    btn2Handler.disabled = true;
                    ans = btn3Handler.innerHTML;
                    console.log(ans);
                    console.log(questions[i-1].answer);
                    if(ans === questions[i-1].answer)
                    {
                        count++;
                        responsiveVoice.speak(`Congratulation your answer is correct`);
                    }
                    else{
                        responsiveVoice.speak(`Sorry the correct answer was ${questions[i-1].answer}`);
                    }
                    console.log(count);
                });
            });