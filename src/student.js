"use strict";

$(()=>{

    class Student{
        constructor(first, last){
            this.first = first;
            this.last = last;
            this.curCredits = 0;
        }

        get fullName(){
            return this.first + " " + this.last;
        }

        addCredits(newCredits){
            this.curCredits += newCredits;
        }
    }

    const students = [
        new Student("Bob","Dylan"),
        new Student("Paul","Simon"),
        new Student("Rod","Stewart"),
        new Student("Freddie","Mercury"),
        new Student("Jon","Bon Jovi"),
        new Student("Elton","John"),
        new Student("John","Lennon"),
        new Student("Tommy","Shaw")
    ];

    let stu;    //current student
    let s = 0;  //index of the current student

    const buttons = ()=>{
        if (s == students.length-1){
            $("#next").prop("disabled",true);
            $("#last").prop("disabled",true);           
        } else {
            $("#next").prop("disabled",false);
            $("#last").prop("disabled",false);          
        }
        if (s == 0){
            $("#first").prop("disabled",true);
            $("#previous").prop("disabled",true);           
        } else {
            $("#first").prop("disabled",false);
            $("#previous").prop("disabled",false);           
        }
    };

    const displayStu = ()=>{
        stu = students[s];
        buttons();
        $("#stuName").val(stu.fullName);
        $("#credits").val(stu.curCredits);

        let out = "<label>Student Name</label>Credits<hr>";

        for (let aStu of students){
            out += "<label>" + aStu.fullName + "</label>" + aStu.curCredits + "<br>";
        }
        $("#output").html(out);
    };

    $("#add").click(()=>{
        stu.addCredits(3);
        displayStu();           
    });

    $("#first").click(()=>{
        s = 0;
        displayStu();
    });

    $("#previous").click(()=>{
        s -= 1;
        displayStu();
    });

    $("#next").click(()=>{
        s += 1;
        displayStu();
    });

    $("#last").click(()=>{
        s = students.length - 1;
        displayStu();
    });

    $("#addall").click(()=>{

        for (let aStu of students){
            aStu.addCredits(3);
        }
        displayStu();
    });


    displayStu();

});