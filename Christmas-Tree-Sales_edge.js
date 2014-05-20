/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['amaranth, sans-serif']='<script src=\"http://use.edgefonts.net/amaranth:n7,i4,i7,n4:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'background',
            type:'rect',
            rect:['0px','0px','600px','800px','auto','auto'],
            fill:["rgba(2,64,1,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Chart-lines',
            type:'group',
            rect:['37px','93px','520','212','auto','auto'],
            c:[
            {
               id:'base-chart-line',
               type:'rect',
               rect:['0px','210px','520px','2px','auto','auto'],
               opacity:1,
               fill:["rgba(188,214,188,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'chart-lineCopy',
               type:'rect',
               rect:['0px','180px','520px','2px','auto','auto'],
               opacity:0.53744506835938,
               fill:["rgba(188,214,188,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'chart-lineCopy2',
               type:'rect',
               rect:['0px','150px','520px','2px','auto','auto'],
               opacity:0.53744506835938,
               fill:["rgba(188,214,188,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'chart-lineCopy3',
               type:'rect',
               rect:['0px','120px','520px','2px','auto','auto'],
               opacity:0.53744506835938,
               fill:["rgba(188,214,188,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'chart-lineCopy4',
               type:'rect',
               rect:['0px','90px','520px','2px','auto','auto'],
               opacity:0.53744506835938,
               fill:["rgba(188,214,188,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'chart-lineCopy7',
               type:'rect',
               rect:['0px','60px','520px','2px','auto','auto'],
               opacity:0.53744506835938,
               fill:["rgba(188,214,188,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'chart-lineCopy6',
               type:'rect',
               rect:['0px','30px','520px','2px','auto','auto'],
               opacity:0.53744506835938,
               fill:["rgba(188,214,188,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'chart-lineCopy5',
               type:'rect',
               rect:['0px','0px','520px','2px','auto','auto'],
               opacity:0.53744506835938,
               fill:["rgba(188,214,188,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         },
         {
            id:'Text',
            type:'text',
            rect:['15px','12px','auto','auto','auto','auto'],
            text:"Annual Christmas Tree Sales<br>",
            font:['amaranth, sans-serif',20,"rgba(246,240,240,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Text2',
            type:'text',
            rect:['15px','37px','auto','auto','auto','auto'],
            text:"In US (millions)",
            align:"left",
            font:['amaranth, sans-serif',16,"rgba(246,240,240,1)","normal","none","normal"]
         },
         {
            id:'numbers',
            type:'group',
            rect:['16','84','17','230','auto','auto'],
            c:[
            {
               id:'Text3',
               type:'text',
               rect:['8px','210px','auto','auto','auto','auto'],
               text:"0",
               align:"left",
               font:['amaranth, sans-serif',16,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text4',
               type:'text',
               rect:['9px','180px','auto','auto','auto','auto'],
               text:"5",
               align:"left",
               font:['amaranth, sans-serif',16,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text5',
               type:'text',
               rect:['2px','149px','auto','auto','auto','auto'],
               text:"10",
               align:"left",
               font:['amaranth, sans-serif',16,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text6',
               type:'text',
               rect:['3px','120px','auto','auto','auto','auto'],
               text:"15",
               align:"left",
               font:['amaranth, sans-serif',16,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text7',
               type:'text',
               rect:['0px','90px','auto','auto','auto','auto'],
               text:"20",
               align:"left",
               font:['amaranth, sans-serif',16,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text8',
               type:'text',
               rect:['1px','60px','auto','auto','auto','auto'],
               text:"25",
               align:"left",
               font:['amaranth, sans-serif',16,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text9',
               type:'text',
               rect:['0px','30px','auto','auto','auto','auto'],
               text:"30",
               align:"left",
               font:['amaranth, sans-serif',16,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text10',
               type:'text',
               rect:['1px','0px','auto','auto','auto','auto'],
               text:"35",
               align:"left",
               font:['amaranth, sans-serif',16,"rgba(246,240,240,1)","normal","none","normal"]
            }]
         },
         {
            id:'year-ticks',
            type:'group',
            rect:['71','299','416','5','auto','auto'],
            c:[
            {
               id:'_2006',
               type:'rect',
               rect:['0px','0px','2px','5px','auto','auto'],
               fill:["rgba(188,214,188,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'_2007',
               type:'rect',
               rect:['59px','0px','2px','5px','auto','auto'],
               fill:["rgba(188,214,188,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'_2008',
               type:'rect',
               rect:['118px','0px','2px','5px','auto','auto'],
               fill:["rgba(188,214,188,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'_2009',
               type:'rect',
               rect:['178px','0px','2px','5px','auto','auto'],
               fill:["rgba(188,214,188,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'_2010',
               type:'rect',
               rect:['237px','0px','2px','5px','auto','auto'],
               fill:["rgba(188,214,188,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'_2011',
               type:'rect',
               rect:['295px','0px','2px','5px','auto','auto'],
               fill:["rgba(188,214,188,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'_2012',
               type:'rect',
               rect:['355px','0px','2px','5px','auto','auto'],
               fill:["rgba(188,214,188,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'_2013',
               type:'rect',
               rect:['414px','0px','2px','5px','auto','auto'],
               fill:["rgba(188,214,188,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         },
         {
            id:'year-numbers',
            type:'group',
            rect:['57','315','526','56','auto','auto'],
            c:[
            {
               id:'year-2006',
               type:'text',
               rect:['0px','0px','auto','auto','auto','auto'],
               text:"2006<br>",
               align:"left",
               font:['amaranth, sans-serif',14,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text12',
               type:'text',
               rect:['67px','0px','auto','auto','auto','auto'],
               text:"07",
               align:"left",
               font:['amaranth, sans-serif',14,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text13',
               type:'text',
               rect:['125px','0px','auto','auto','auto','auto'],
               text:"08",
               align:"left",
               font:['amaranth, sans-serif',14,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text14',
               type:'text',
               rect:['185px','0px','auto','auto','auto','auto'],
               text:"09",
               align:"left",
               font:['amaranth, sans-serif',14,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text15',
               type:'text',
               rect:['245px','0px','auto','auto','auto','auto'],
               text:"10",
               align:"left",
               font:['amaranth, sans-serif',14,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text16',
               type:'text',
               rect:['309px','0px','auto','auto','auto','auto'],
               text:"11",
               align:"left",
               font:['amaranth, sans-serif',14,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text17',
               type:'text',
               rect:['365px','0px','auto','auto','auto','auto'],
               text:"12",
               align:"left",
               font:['amaranth, sans-serif',14,"rgba(246,240,240,1)","normal","none","normal"]
            },
            {
               id:'Text18',
               type:'text',
               rect:['422px','0px','auto','auto','auto','auto'],
               text:"13",
               align:"left",
               font:['amaranth, sans-serif',14,"rgba(246,240,240,1)","normal","none","normal"]
            }]
         },
         {
            id:'source',
            type:'text',
            rect:['315px','354px','auto','auto','auto','auto'],
            cursor:['pointer'],
            opacity:0.60330200195312,
            text:"Source: National Christmas Tree Association<br>",
            align:"left",
            font:['amaranth, sans-serif',14,"rgba(246,240,240,1)","normal","none","normal"]
         },
         {
            id:'Real-Tree-Data-Point',
            type:'rect',
            rect:['64px','124px','auto','auto','auto','auto']
         },
         {
            id:'Real-Tree-Data-Point2',
            type:'rect',
            rect:['121','114px','auto','auto','auto','auto']
         },
         {
            id:'Real-Tree-Data-Point3',
            type:'rect',
            rect:['182px','125','auto','auto','auto','auto']
         },
         {
            id:'Real-Tree-Data-Point3Copy',
            type:'rect',
            rect:['182','125','auto','auto','auto','auto']
         },
         {
            id:'Real-Tree-Data-Point4',
            type:'rect',
            rect:['234','124','auto','auto','auto','auto']
         },
         {
            id:'Real-Tree-Data-Point5',
            type:'rect',
            rect:['366','114','auto','auto','auto','auto']
         },
         {
            id:'Real-Tree-Data-Point6',
            type:'rect',
            rect:['422','153','auto','auto','auto','auto']
         },
         {
            id:'Real-Tree-Data-Point7',
            type:'rect',
            rect:['479px','134','auto','auto','auto','auto']
         },
         {
            id:'fake-Tree-Data',
            type:'group',
            rect:['64','193','428','70','auto','auto'],
            transform:[],
            c:[
            {
               id:'Fake-Tree-Data-Point',
               type:'rect',
               rect:['0px','51px','auto','auto','auto','auto']
            },
            {
               id:'Fake-Tree-Data-Point2',
               type:'rect',
               rect:['60px','0px','auto','auto','auto','auto']
            },
            {
               id:'Fake-Tree-Data-Point3',
               type:'rect',
               rect:['118px','40px','auto','auto','auto','auto']
            },
            {
               id:'Fake-Tree-Data-Point3Copy',
               type:'rect',
               rect:['174px','40px','auto','auto','auto','auto']
            },
            {
               id:'Fake-Tree-Data-Point4',
               type:'rect',
               rect:['239px','57px','auto','auto','auto','auto']
            },
            {
               id:'Fake-Tree-Data-Point5',
               type:'rect',
               rect:['297px','49px','auto','auto','auto','auto']
            },
            {
               id:'Fake-Tree-Data-Point6',
               type:'rect',
               rect:['355px','35px','auto','auto','auto','auto']
            },
            {
               id:'Fake-Tree-Data-Point7',
               type:'rect',
               rect:['415px','47px','auto','auto','auto','auto']
            }]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['43px','140px','24px','1px','auto','auto'],
            fill:["rgba(102,174,241,1.00)"],
            stroke:[1,"rgba(241,219,102,1)","none"]
         },
         {
            id:'RectangleCopy',
            type:'rect',
            rect:['43px','140px','24px','1px','auto','auto'],
            fill:["rgba(102,174,241,1.00)"],
            stroke:[1,"rgba(241,219,102,1)","none"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['71px','130px','59px','1px','auto','auto'],
            fill:["rgba(102,174,241,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['-9']]
         },
         {
            id:'Rectangle3',
            type:'rect',
            rect:['131px','120px','57px','1px','auto','auto'],
            fill:["rgba(102,174,241,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['13']]
         },
         {
            id:'Rectangle4',
            type:'rect',
            rect:['189px','133px','57px','1px','auto','auto'],
            fill:["rgba(102,174,241,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"]
         },
         {
            id:'Rectangle4Copy2',
            type:'rect',
            rect:['310px','136px','60px','1px','auto','auto'],
            fill:["rgba(102,174,241,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['-14']]
         },
         {
            id:'Rectangle4Copy4',
            type:'rect',
            rect:['425px','159px','60px','1px','auto','auto'],
            fill:["rgba(102,174,241,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['-18']]
         },
         {
            id:'Rectangle4Copy',
            type:'rect',
            rect:['245px','133px','64px','1px','auto','auto'],
            fill:["rgba(102,174,241,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['3']]
         },
         {
            id:'Rectangle4Copy3',
            type:'rect',
            rect:['370px','122px','64px','1px','auto','auto'],
            fill:["rgba(102,174,241,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['33']]
         },
         {
            id:'Rectangle5',
            type:'rect',
            rect:['72px','250px','75px','1px','auto','auto'],
            fill:["rgba(241,219,102,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['-41']]
         },
         {
            id:'Rectangle6',
            type:'rect',
            rect:['131px','199px','69px','1px','auto','auto'],
            fill:["rgba(241,219,102,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['35']]
         },
         {
            id:'Rectangle7',
            type:'rect',
            rect:['188px','239px','57px','1px','auto','auto'],
            fill:["rgba(241,219,102,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"]
         },
         {
            id:'Rectangle8',
            type:'rect',
            rect:['244px','239px','67px','1px','auto','auto'],
            fill:["rgba(241,219,102,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['15']]
         },
         {
            id:'Rectangle9',
            type:'rect',
            rect:['309px','256px','60px','1px','auto','auto'],
            fill:["rgba(241,219,102,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['-8']]
         },
         {
            id:'Rectangle10',
            type:'rect',
            rect:['367px','248px','60px','1px','auto','auto'],
            fill:["rgba(241,219,102,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['-13']]
         },
         {
            id:'Rectangle11',
            type:'rect',
            rect:['426px','234px','60px','1px','auto','auto'],
            fill:["rgba(241,219,102,1)"],
            stroke:[1,"rgb(241, 219, 102)","none"],
            transform:[[],['12']]
         },
         {
            id:'Pie-Chart-Background',
            type:'rect',
            rect:['34px','424px','541px','210px','auto','auto'],
            fill:["rgba(219,225,219,0.01)",[270,[['rgba(241,241,241,0.00)',0],['rgba(211,49,53,0.24)',100]]]],
            stroke:[1,"rgba(56,72,56,1.00)","solid"]
         },
         {
            id:'Pie-Chart',
            type:'ellipse',
            rect:['22px','412px','202px','202px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(127,24,24,1.00)",[50,50,true,'farthest-corner',[['rgba(182,119,133,1.00)',0],['rgba(225,16,16,1.00)',100]]]],
            stroke:[4,"rgba(227,219,219,1.00)","solid"]
         },
         {
            id:'wedge_container',
            type:'group',
            rect:['-3px','392px','250','250','auto','auto'],
            clip:['rect(0px 250px 123px 0px)'],
            transform:[[],['14']],
            c:[
            {
               id:'wedge',
               type:'ellipse',
               rect:['0px','0px','250px','250px','auto','auto'],
               clip:['rect(0px 250px 123px 0px)'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(129,232,231,1.00)",[50,50,true,'farthest-corner',[['rgba(87,235,91,1.00)',0],['rgba(36,201,26,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],['129']]
            }]
         },
         {
            id:'Text20',
            type:'text',
            rect:['255px','530px','302px','83px','auto','auto'],
            text:"\"Cut my own\" is a tree harvested by the consumer and purchased at a Choose &amp; Cut farm, where it is grown by the farmer.",
            align:"left",
            font:['amaranth, sans-serif',17,"rgba(221,242,229,1)","normal","none","normal"]
         },
         {
            id:'Text19',
            type:'text',
            rect:['429px','436px','147px','auto','auto','auto'],
            text:"Real tree buyers cut their own.",
            align:"left",
            font:['amaranth, sans-serif',20,"rgba(221,242,229,1)","normal","none","normal"]
         },
         {
            id:'horizontal_rule',
            type:'rect',
            rect:['229px','501px','338px','1px','auto','auto'],
            fill:["rgba(219,225,219,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'_14',
            type:'text',
            rect:['270px','412px','auto','auto','auto','auto'],
            text:"14%",
            font:['amaranth, sans-serif',81,"rgba(221,242,229,1.00)","normal","none",""]
         },
         {
            id:'background-pie-chart',
            type:'ellipse',
            rect:['153px','769px','155px','155px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(2,64,1,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'_24wedge2',
            type:'rect',
            rect:['155','692','auto','auto','auto','auto']
         },
         {
            id:'_11wedge-blue',
            type:'rect',
            rect:['112','649','auto','auto','auto','auto']
         },
         {
            id:'_11Wedge-1',
            type:'rect',
            rect:['112','649','auto','auto','auto','auto']
         },
         {
            id:'green',
            type:'group',
            rect:['163','700','250','250','auto','auto'],
            clip:['rect(0px 250px 124.58203125px 0px)'],
            transform:[[],['-17']],
            c:[
            {
               id:'greenWedge2',
               type:'rect',
               rect:['-50','-50','auto','auto','auto','auto']
            }]
         }],
         symbolInstances: [
         {
            id:'Fake-Tree-Data-Point4',
            symbolName:'Fake-Tree-Data-Point'
         },
         {
            id:'Real-Tree-Data-Point',
            symbolName:'Real-Tree-Data-Point'
         },
         {
            id:'Real-Tree-Data-Point3Copy',
            symbolName:'Real-Tree-Data-Point'
         },
         {
            id:'Real-Tree-Data-Point5',
            symbolName:'Real-Tree-Data-Point'
         },
         {
            id:'Real-Tree-Data-Point4',
            symbolName:'Real-Tree-Data-Point'
         },
         {
            id:'Fake-Tree-Data-Point',
            symbolName:'Fake-Tree-Data-Point'
         },
         {
            id:'greenWedge2',
            symbolName:'greenWedge'
         },
         {
            id:'Fake-Tree-Data-Point5',
            symbolName:'Fake-Tree-Data-Point'
         },
         {
            id:'Fake-Tree-Data-Point3Copy',
            symbolName:'Fake-Tree-Data-Point'
         },
         {
            id:'Real-Tree-Data-Point6',
            symbolName:'Real-Tree-Data-Point'
         },
         {
            id:'_11wedge-blue',
            symbolName:'_11wedge-blue'
         },
         {
            id:'_24wedge2',
            symbolName:'_24wedge'
         },
         {
            id:'Fake-Tree-Data-Point2',
            symbolName:'Fake-Tree-Data-Point'
         },
         {
            id:'_11Wedge-1',
            symbolName:'_11Wedge-1'
         },
         {
            id:'Real-Tree-Data-Point2',
            symbolName:'Real-Tree-Data-Point'
         },
         {
            id:'Real-Tree-Data-Point3',
            symbolName:'Real-Tree-Data-Point'
         },
         {
            id:'Real-Tree-Data-Point7',
            symbolName:'Real-Tree-Data-Point'
         },
         {
            id:'Fake-Tree-Data-Point7',
            symbolName:'Fake-Tree-Data-Point'
         },
         {
            id:'Fake-Tree-Data-Point6',
            symbolName:'Fake-Tree-Data-Point'
         },
         {
            id:'Fake-Tree-Data-Point3',
            symbolName:'Fake-Tree-Data-Point'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Real-Tree-Data-Point7}": [
            ["style", "top", '133px']
         ],
         "${__2012}": [
            ["style", "top", '0px'],
            ["style", "height", '5px'],
            ["style", "left", '355px'],
            ["style", "width", '2px']
         ],
         "${_Text2}": [
            ["style", "top", '37px'],
            ["style", "left", '15px'],
            ["style", "font-size", '16px']
         ],
         "${__2009}": [
            ["style", "height", '5px'],
            ["style", "top", '0px'],
            ["style", "left", '178px'],
            ["style", "width", '2px']
         ],
         "${_wedge_container}": [
            ["style", "top", '392px'],
            ["style", "left", '-3px'],
            ["style", "clip", [0,250,123,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Rectangle4}": [
            ["style", "top", '133px']
         ],
         "${_chart-lineCopy2}": [
            ["style", "top", '150px'],
            ["style", "height", '2px'],
            ["style", "opacity", '0.53744506835938'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(188,214,188,1.00)']
         ],
         "${__11wedge-blue}": [
            ["transform", "rotateZ", '274deg']
         ],
         "${_Fake-Tree-Data-Point4}": [
            ["style", "top", '57px'],
            ["style", "left", '239px']
         ],
         "${_background}": [
            ["color", "background-color", 'rgba(2,64,1,1.00)'],
            ["style", "top", '0px'],
            ["style", "height", '1000px']
         ],
         "${_Text10}": [
            ["style", "left", '1px'],
            ["style", "top", '0px']
         ],
         "${_background-pie-chart}": [
            ["color", "background-color", 'rgba(248,248,248,1.00)'],
            ["style", "height", '250px'],
            ["style", "top", '700px'],
            ["style", "left", '163px'],
            ["style", "width", '250px']
         ],
         "${_Rectangle4Copy4}": [
            ["style", "top", '159px'],
            ["transform", "rotateZ", '-18deg'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '425px'],
            ["style", "width", '60px']
         ],
         "${_wedge}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(129,232,231,1.00)'],
            ["style", "clip", [0,250,123,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '250px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(87,235,91,1.00)',0],['rgba(36,201,26,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '250px']
         ],
         "${_base-chart-line}": [
            ["color", "background-color", 'rgba(188,214,188,1.00)'],
            ["style", "height", '2px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "top", '210px']
         ],
         "${_Text3}": [
            ["style", "top", '210px'],
            ["style", "left", '8px']
         ],
         "${_year-2006}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_Rectangle4Copy3}": [
            ["style", "top", '122px'],
            ["transform", "rotateZ", '33deg'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '370px'],
            ["style", "width", '64px']
         ],
         "${_greenWedge2}": [
            ["transform", "rotateZ", '126deg']
         ],
         "${_Rectangle9}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-8deg'],
            ["style", "top", '256px'],
            ["style", "left", '309px'],
            ["style", "width", '0px']
         ],
         "${_chart-lineCopy6}": [
            ["style", "top", '30px'],
            ["style", "height", '2px'],
            ["style", "opacity", '0.53744506835938'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(188,214,188,1.00)']
         ],
         "${_Pie-Chart}": [
            ["color", "background-color", 'rgba(127,24,24,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '202px'],
            ["style", "top", '412px'],
            ["style", "height", '202px'],
            ["color", "border-color", 'rgba(227,219,219,1.00)'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(182,119,133,1.00)',0],['rgba(225,16,16,1.00)',100]]]],
            ["style", "left", '22px']
         ],
         "${__2010}": [
            ["style", "top", '0px'],
            ["style", "height", '5px'],
            ["style", "left", '237px'],
            ["style", "width", '2px']
         ],
         "${_Fake-Tree-Data-Point}": [
            ["style", "left", '0px'],
            ["style", "top", '51px']
         ],
         "${__14}": [
            ["style", "top", '412px'],
            ["color", "color", 'rgba(221,242,229,1.00)'],
            ["style", "font-family", 'amaranth, sans-serif'],
            ["style", "left", '270px'],
            ["style", "font-size", '81px']
         ],
         "${_Fake-Tree-Data-Point2}": [
            ["style", "top", '0px'],
            ["style", "left", '60px']
         ],
         "${_Rectangle4Copy2}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-14deg'],
            ["style", "top", '136px'],
            ["style", "left", '310px'],
            ["style", "width", '60px']
         ],
         "${_Text13}": [
            ["style", "left", '125px'],
            ["style", "top", '0px']
         ],
         "${_Text6}": [
            ["style", "top", '120px'],
            ["style", "left", '3px']
         ],
         "${_Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(246,240,240,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '15px'],
            ["style", "font-size", '20px'],
            ["style", "top", '12px'],
            ["style", "font-family", 'amaranth, sans-serif'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'visible'],
            ["style", "height", '1000px'],
            ["style", "width", '600px']
         ],
         "${_Rectangle11}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '12deg'],
            ["style", "top", '234px'],
            ["style", "left", '426px'],
            ["style", "width", '0px']
         ],
         "${_Rectangle2}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-9deg'],
            ["style", "top", '130px'],
            ["style", "left", '71px'],
            ["style", "width", '59px']
         ],
         "${_Text15}": [
            ["style", "top", '0px'],
            ["style", "left", '245px']
         ],
         "${_Real-Tree-Data-Point3Copy}": [
            ["style", "top", '127px'],
            ["style", "left", '238px']
         ],
         "${_Text8}": [
            ["style", "left", '1px'],
            ["style", "top", '60px']
         ],
         "${_green}": [
            ["style", "clip", [0,250,124.58203125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '-17deg']
         ],
         "${_chart-lineCopy5}": [
            ["color", "background-color", 'rgba(188,214,188,1.00)'],
            ["style", "height", '2px'],
            ["style", "opacity", '0.53744506835938'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text18}": [
            ["style", "left", '422px'],
            ["style", "top", '0px']
         ],
         "${_Text4}": [
            ["style", "top", '180px'],
            ["style", "left", '9px']
         ],
         "${_Rectangle7}": [
            ["style", "top", '239px'],
            ["style", "width", '0px']
         ],
         "${__2006}": [
            ["style", "top", '0px'],
            ["style", "height", '5px'],
            ["style", "left", '0px'],
            ["style", "width", '2px']
         ],
         "${__2011}": [
            ["style", "height", '5px'],
            ["style", "top", '0px'],
            ["style", "left", '295px'],
            ["style", "width", '2px']
         ],
         "${__2008}": [
            ["style", "top", '0px'],
            ["style", "height", '5px'],
            ["style", "left", '118px'],
            ["style", "width", '2px']
         ],
         "${__2013}": [
            ["style", "height", '5px'],
            ["style", "top", '0px'],
            ["style", "left", '414px'],
            ["style", "width", '2px']
         ],
         "${__11Wedge-1}": [
            ["transform", "rotateZ", '40deg']
         ],
         "${_source}": [
            ["style", "top", '354px'],
            ["style", "opacity", '0.60330200195312'],
            ["style", "left", '315px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text20}": [
            ["style", "top", '530px'],
            ["style", "font-size", '17px'],
            ["style", "height", '83px'],
            ["style", "opacity", '0'],
            ["style", "left", '255px'],
            ["style", "width", '302px']
         ],
         "${_chart-lineCopy}": [
            ["color", "background-color", 'rgba(188,214,188,1.00)'],
            ["style", "height", '2px'],
            ["style", "opacity", '0.53744506835938'],
            ["style", "left", '0px'],
            ["style", "top", '180px']
         ],
         "${_Text9}": [
            ["style", "left", '0px'],
            ["style", "top", '30px']
         ],
         "${_Text19}": [
            ["style", "top", '436px'],
            ["style", "font-size", '20px'],
            ["style", "left", '429px'],
            ["style", "width", '147px']
         ],
         "${_Rectangle4Copy}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '3deg'],
            ["style", "top", '133px'],
            ["style", "left", '245px'],
            ["style", "width", '64px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(241,219,102,1.00)'],
            ["style", "top", '263px'],
            ["transform", "rotateZ", '-31deg'],
            ["style", "height", '1px'],
            ["style", "border-style", 'none'],
            ["style", "left", '49px'],
            ["style", "width", '0px']
         ],
         "${_Real-Tree-Data-Point6}": [
            ["style", "left", '419px'],
            ["style", "top", '152px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '120px'],
            ["transform", "rotateZ", '13deg'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '131px'],
            ["style", "width", '57px']
         ],
         "${_Rectangle10}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-13deg'],
            ["style", "top", '248px'],
            ["style", "left", '367px'],
            ["style", "width", '0px']
         ],
         "${_Text5}": [
            ["style", "left", '2px'],
            ["style", "top", '149px']
         ],
         "${__2007}": [
            ["style", "height", '5px'],
            ["style", "top", '0px'],
            ["style", "left", '59px'],
            ["style", "width", '2px']
         ],
         "${_Rectangle5}": [
            ["style", "top", '250px'],
            ["transform", "rotateZ", '-41deg'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '72px'],
            ["style", "width", '0px']
         ],
         "${_chart-lineCopy4}": [
            ["style", "top", '90px'],
            ["style", "height", '2px'],
            ["style", "opacity", '0.53744506835938'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(188,214,188,1.00)']
         ],
         "${_Real-Tree-Data-Point5}": [
            ["style", "left", '361px'],
            ["style", "top", '115px']
         ],
         "${_horizontal_rule}": [
            ["style", "top", '501px'],
            ["style", "height", '1px'],
            ["color", "background-color", 'rgba(219,225,219,1.00)'],
            ["style", "left", '229px'],
            ["style", "width", '338px']
         ],
         "${_chart-lineCopy3}": [
            ["color", "background-color", 'rgba(188,214,188,1.00)'],
            ["style", "height", '2px'],
            ["style", "opacity", '0.53744506835938'],
            ["style", "left", '0px'],
            ["style", "top", '120px']
         ],
         "${_chart-lineCopy7}": [
            ["color", "background-color", 'rgba(188,214,188,1.00)'],
            ["style", "height", '2px'],
            ["style", "opacity", '0.53744506835938'],
            ["style", "left", '0px'],
            ["style", "top", '60px']
         ],
         "${_Rectangle8}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '15deg'],
            ["style", "top", '239px'],
            ["style", "left", '244px'],
            ["style", "width", '0px']
         ],
         "${_Fake-Tree-Data-Point3Copy}": [
            ["style", "left", '174px'],
            ["style", "top", '40px']
         ],
         "${_Real-Tree-Data-Point3}": [
            ["style", "top", '127px']
         ],
         "${_Fake-Tree-Data-Point7}": [
            ["style", "left", '415px'],
            ["style", "top", '47px']
         ],
         "${_Real-Tree-Data-Point2}": [
            ["style", "left", '125px']
         ],
         "${_Text7}": [
            ["style", "top", '90px'],
            ["style", "left", '0px']
         ],
         "${_Text17}": [
            ["style", "top", '0px'],
            ["style", "left", '365px']
         ],
         "${_Text16}": [
            ["style", "top", '0px'],
            ["style", "left", '309px']
         ],
         "${_Rectangle6}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "width", '0px'],
            ["style", "left", '131px'],
            ["transform", "rotateZ", '35deg']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(102,174,241,1.00)'],
            ["style", "top", '137px'],
            ["transform", "rotateZ", '-31deg'],
            ["style", "height", '1px'],
            ["style", "border-style", 'none'],
            ["style", "left", '47px'],
            ["style", "width", '24px']
         ],
         "${_Fake-Tree-Data-Point3}": [
            ["style", "left", '118px'],
            ["style", "top", '40px']
         ],
         "${_Pie-Chart-Background}": [
            ["color", "background-color", 'rgba(219,225,219,0.01)'],
            ["style", "top", '424px'],
            ["style", "border-width", '1px'],
            ["gradient", "background-image", [270,[['rgba(241,241,241,0.00)',0],['rgba(211,49,53,0.24)',100]]]],
            ["style", "height", '210px'],
            ["color", "border-color", 'rgba(56,72,56,1.00)'],
            ["style", "left", '34px'],
            ["style", "border-style", 'solid']
         ],
         "${_Text12}": [
            ["style", "top", '0px'],
            ["style", "left", '67px']
         ],
         "${_Real-Tree-Data-Point4}": [
            ["style", "left", '303px'],
            ["style", "top", '130px']
         ],
         "${_Text14}": [
            ["style", "left", '185px'],
            ["style", "top", '0px']
         ],
         "${_Fake-Tree-Data-Point5}": [
            ["style", "top", '49px'],
            ["style", "left", '297px']
         ],
         "${_Fake-Tree-Data-Point6}": [
            ["style", "top", '35px'],
            ["style", "left", '355px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid133", tween: [ "style", "${_background-pie-chart}", "left", '163px', { fromValue: '163px'}], position: 5000, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Real-Tree-Data-Point3Copy}", "left", '238px', { fromValue: '238px'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_background}", "height", '1000px', { fromValue: '1000px'}], position: 5000, duration: 0 },
            { id: "eid154", tween: [ "style", "${_background-pie-chart}", "height", '250px', { fromValue: '250px'}], position: 5000, duration: 0 },
            { id: "eid104", tween: [ "style", "${_RectangleCopy}", "left", '47px', { fromValue: '49px'}], position: 0, duration: 500 },
            { id: "eid114", tween: [ "style", "${_Rectangle8}", "width", '67px', { fromValue: '0px'}], position: 2000, duration: 500 },
            { id: "eid106", tween: [ "style", "${_RectangleCopy}", "width", '24px', { fromValue: '0px'}], position: 0, duration: 500 },
            { id: "eid93", tween: [ "style", "${_Rectangle}", "left", '47px', { fromValue: '47px'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_Real-Tree-Data-Point4}", "top", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
            { id: "eid126", tween: [ "style", "${_Text20}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "transform", "${_Rectangle}", "rotateZ", '-31deg', { fromValue: '-31deg'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Real-Tree-Data-Point2}", "left", '125px', { fromValue: '125px'}], position: 0, duration: 0 },
            { id: "eid178", tween: [ "transform", "${__11wedge-blue}", "rotateZ", '274deg', { fromValue: '274deg'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "transform", "${__11Wedge-1}", "rotateZ", '40deg', { fromValue: '40deg'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Real-Tree-Data-Point6}", "left", '419px', { fromValue: '419px'}], position: 0, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Fake-Tree-Data-Point2}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid3", tween: [ "style", "${_Real-Tree-Data-Point3}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid155", tween: [ "style", "${_background-pie-chart}", "width", '250px', { fromValue: '250px'}], position: 5000, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Rectangle7}", "width", '57px', { fromValue: '0px'}], position: 1500, duration: 500 },
            { id: "eid100", tween: [ "color", "${_RectangleCopy}", "background-color", 'rgba(241,219,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,219,102,1.00)'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Real-Tree-Data-Point6}", "top", '152px', { fromValue: '152px'}], position: 0, duration: 0 },
            { id: "eid129", tween: [ "color", "${_background-pie-chart}", "background-color", 'rgba(248,248,248,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(248,248,248,1.00)'}], position: 5000, duration: 0 },
            { id: "eid128", tween: [ "style", "${_Stage}", "height", '1000px', { fromValue: '1000px'}], position: 5000, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_wedge}", "rotateZ", '129deg', { fromValue: '180deg'}], position: 0, duration: 2000, easing: "easeOutElastic" },
            { id: "eid85", tween: [ "style", "${_Fake-Tree-Data-Point5}", "top", '49px', { fromValue: '49px'}], position: 2000, duration: 0 },
            { id: "eid124", tween: [ "transform", "${_wedge_container}", "rotateZ", '14deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutElastic" },
            { id: "eid132", tween: [ "style", "${_background-pie-chart}", "top", '700px', { fromValue: '700px'}], position: 5000, duration: 0 },
            { id: "eid94", tween: [ "style", "${_Rectangle}", "top", '137px', { fromValue: '137px'}], position: 0, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Fake-Tree-Data-Point6}", "top", '35px', { fromValue: '35px'}], position: 2000, duration: 0 },
            { id: "eid181", tween: [ "transform", "${_greenWedge2}", "rotateZ", '126deg', { fromValue: '126deg'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_Fake-Tree-Data-Point4}", "top", '57px', { fromValue: '57px'}], position: 2000, duration: 0 },
            { id: "eid110", tween: [ "style", "${_Rectangle6}", "width", '69px', { fromValue: '0px'}], position: 1000, duration: 500 },
            { id: "eid108", tween: [ "style", "${_Rectangle5}", "width", '75px', { fromValue: '0px'}], position: 500, duration: 500 },
            { id: "eid6", tween: [ "style", "${_Real-Tree-Data-Point3Copy}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Real-Tree-Data-Point5}", "left", '361px', { fromValue: '361px'}], position: 0, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Fake-Tree-Data-Point3Copy}", "left", '174px', { fromValue: '174px'}], position: 2000, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Real-Tree-Data-Point5}", "top", '115px', { fromValue: '115px'}], position: 0, duration: 0 },
            { id: "eid120", tween: [ "style", "${_Rectangle11}", "width", '60px', { fromValue: '0px'}], position: 3500, duration: 500 },
            { id: "eid97", tween: [ "transform", "${_RectangleCopy}", "rotateZ", '-31deg', { fromValue: '-31deg'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_Real-Tree-Data-Point4}", "left", '303px', { fromValue: '303px'}], position: 0, duration: 0 },
            { id: "eid102", tween: [ "style", "${_RectangleCopy}", "top", '257px', { fromValue: '263px'}], position: 0, duration: 500 },
            { id: "eid116", tween: [ "style", "${_Rectangle9}", "width", '60px', { fromValue: '0px'}], position: 2500, duration: 500 },
            { id: "eid15", tween: [ "style", "${_Real-Tree-Data-Point7}", "top", '133px', { fromValue: '133px'}], position: 0, duration: 0 },
            { id: "eid118", tween: [ "style", "${_Rectangle10}", "width", '60px', { fromValue: '0px'}], position: 3000, duration: 500 }         ]
      }
   }
},
"Real-Tree-Data-Point": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','3px','7px','7px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(102,174,241,1)']
   },
   {
      rect: ['0px','0px','11px','11px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [1,'rgba(102,174,241,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(102,174,241,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(102,174,241,0.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '11px'],
            ["style", "top", '0px'],
            ["style", "height", '11px'],
            ["color", "border-color", 'rgba(102,174,241,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "opacity", '0']
         ],
         "${_Ellipse}": [
            ["style", "top", '3px'],
            ["style", "height", '7px'],
            ["color", "background-color", 'rgba(102,174,241,1.00)'],
            ["style", "left", '3px'],
            ["style", "width", '7px']
         ],
         "${symbolSelector}": [
            ["style", "height", '13px'],
            ["style", "width", '13px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid20", tween: [ "style", "${_Ellipse2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid21", tween: [ "style", "${_Ellipse2}", "opacity", '0.49972534179688', { fromValue: '1'}], position: 1000, duration: 1000 }         ]
      }
   }
},
"Fake-Tree-Data-Point": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','3px','7px','7px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(241,219,102,1.00)']
   },
   {
      rect: ['0px','0px','11px','11px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [1,'rgba(102,174,241,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(102,174,241,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(241,219,102,0.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '11px'],
            ["style", "top", '0px'],
            ["style", "height", '11px'],
            ["color", "border-color", 'rgba(241,219,102,1.00)'],
            ["style", "opacity", '0'],
            ["style", "border-width", '1px']
         ],
         "${_Ellipse}": [
            ["style", "top", '3px'],
            ["style", "height", '7px'],
            ["color", "background-color", 'rgba(241,219,102,1.00)'],
            ["style", "left", '3px'],
            ["style", "width", '7px']
         ],
         "${symbolSelector}": [
            ["style", "height", '13px'],
            ["style", "width", '13px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid20", tween: [ "style", "${_Ellipse2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid21", tween: [ "style", "${_Ellipse2}", "opacity", '0.49972534179688', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid71", tween: [ "color", "${_Ellipse2}", "border-color", 'rgba(241,219,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,219,102,1.00)'}], position: 2000, duration: 0 },
            { id: "eid70", tween: [ "color", "${_Ellipse2}", "background-color", 'rgba(241,219,102,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,219,102,0.00)'}], position: 2000, duration: 0 }         ]
      }
   }
},
"_24wedge": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: '_24wedge_container',
      type: 'group',
      rect: ['8px','8px','250','250','auto','auto'],
      c: [
      {
         rect: ['70px','87px','115px','115px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: '_24wedge',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(248,248,248,1)',[50,50,'true','farthest-corner',[['rgba(250,143,143,1.00)',0],['rgba(250,0,0,1.00)',100]]]]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '267px'],
            ["style", "width", '267px']
         ],
         "${__24wedge_container}": [
            ["style", "top", '8px'],
            ["style", "left", '8px'],
            ["style", "clip", [0,250,125.15625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${__24wedge}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(248,0,0,1.00)'],
            ["transform", "rotateZ", '94deg'],
            ["style", "height", '250px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(250,143,143,1.00)',0],['rgba(250,0,0,1.00)',100]]]],
            ["style", "clip", [0,250,125.04296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '250px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid173", tween: [ "style", "${__24wedge_container}", "clip", [0,250,125.15625,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,250,125.15625,0]}], position: 5000, duration: 0 }         ]
      }
   }
},
"_11Wedge-1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['51px','51px','250','250','auto','auto'],
      id: '_11wedge_containerCopy',
      clip: ['rect(0px 250px 124.95703125px 0px)'],
      type: 'group',
      c: [
      {
         transform: [[],['140']],
         rect: ['0px','0px','250px','250px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         type: 'ellipse',
         id: '_11wedgeCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         clip: ['rect(0px 250px 125.09765625px 0px)'],
         fill: ['rgba(247,248,0,1.00)',[50,50,'true','farthest-corner',[['rgba(243,243,208,1.00)',0],['rgba(237,248,0,1.00)',100]]]]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__11wedge_containerCopy}": [
            ["style", "top", '51px'],
            ["style", "left", '51px'],
            ["style", "clip", [0,250,124.95703125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '352px'],
            ["style", "width", '352px']
         ],
         "${__11wedgeCopy}": [
            ["color", "background-color", 'rgba(247,248,0,1.00)'],
            ["transform", "rotateZ", '140deg'],
            ["style", "left", '0px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(243,243,208,1.00)',0],['rgba(237,248,0,1.00)',100]]]],
            ["style", "clip", [0,250,125.09765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"_11wedge-blue": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['51px','51px','250','250','auto','auto'],
      id: '_11wedge_container',
      clip: ['rect(0px 250px 124.95703125px 0px)'],
      type: 'group',
      c: [
      {
         transform: [[],['140']],
         rect: ['0px','0px','250px','250px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         type: 'ellipse',
         id: '_11wedge',
         stroke: [0,'rgb(0, 0, 0)','none'],
         clip: ['rect(0px 250px 125.09765625px 0px)'],
         fill: ['rgba(25,0,248,1.00)',[50,50,'true','farthest-corner',[['rgba(133,138,216,1.00)',0],['rgba(27,28,234,1.00)',100]]]]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__11wedge}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '140deg'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(133,138,216,1.00)',0],['rgba(27,28,234,1.00)',100]]]],
            ["style", "clip", [0,250,125.09765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${__11wedge_container}": [
            ["style", "top", '51px'],
            ["style", "left", '51px'],
            ["style", "clip", [0,250,124.95703125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '352px'],
            ["style", "width", '352px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"greenWedge": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[],['126']],
      rect: ['50px','50px','250px','250px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'greenWedge',
      stroke: [0,'rgb(0, 0, 0)','none'],
      clip: ['rect(0px 250px 124.5859375px 0px)'],
      fill: ['rgba(0,248,15,1.00)',[50,50,'true','farthest-corner',[['rgba(183,242,192,1.00)',0],['rgba(3,245,22,1.00)',100]]]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_greenWedge}": [
            ["color", "background-color", 'rgba(0,248,15,1.00)'],
            ["transform", "rotateZ", '126deg'],
            ["style", "top", '50px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(183,242,192,1.00)',0],['rgba(3,245,22,1.00)',100]]]],
            ["style", "clip", [0,250,124.5859375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '50px']
         ],
         "${symbolSelector}": [
            ["style", "height", '349px'],
            ["style", "width", '349px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Christmas-Trees");
