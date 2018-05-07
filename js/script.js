
var naechtigungen = [2143656, 2637562, 3019844];

for (var i=0; i<naechtigungen.length; i=i+1) {$('#liste').append("<li>" + naechtigungen[i] + "</li>");
}

var sh2007h =(200/4000000*naechtigungen[0]);
var sh2007y = (250 - sh2007h);

var sh2013h =(200/4000000*naechtigungen[1]);
var sh2013y = (250 - sh2013h);

var sh2017h =(200/4000000*naechtigungen[2]);
var sh2017y = (250 - sh2017h);


$('#sh2007').height(sh2007h);
$('#sh2007').attr('y', sh2007y);

$('#sh2013').height(sh2013h);
$('#sh2013').attr('y', sh2013y);

$('#sh2017').height(sh2017h);
$('#sh2017').attr('y', sh2017y);

var shb2007y = (sh2007y - 10);
var shb2013y = (sh2013y - 10);
var shb2017y = (sh2017y - 10);

$('#shb2007').attr('y', shb2007y);
$('#shb2013').attr('y', shb2013y);
$('#shb2017').attr('y', shb2017y);

$('#diagrammsh').hide();

$('#buttonsh').on('click',function(){$('#diagrammsh').show() && $('#diagrammsd').hide() 
    } );

$('#buttonsd').on('click',function(){$('#diagrammsd').show() && $('#diagrammsh').hide() 
    } );



