	var Ycuota=[],Xcuota=[],Yinteres=[],aleatorios=[],cuotas=[],IxC=[],fecha=[],inflacion=[3.68],
	intervencion=[4.75],colocacion=[19.79],fechainicial,
		TRM=[ 2984.00, 2984.00, 2940.94, 2908.68, 2885.76, 2898.32, 2898.32,2898.32,2898.32,
			  2914.37,2895.69,2865.79,2855.86,2855.86,2855.86,2855.86,2868.03,2851.13,2836.85,
			  2851.75,2851.75,2851.75,2854.20,2858.50,2820.53,2783.13,2805.12,2805.12,2805.12,
			  2842.67,2844.14,2835.05,2806.67,2832.13,2832.13,2832.13,2843.60,2844.83,2830.89,
			  2862.78,2908.70,2908.70,2908.70,2904.29,2904.71,2895.79,2851.74,2853.16,2853.16,
			  2853.16,2853.16,2862.01,2877.94,2877.04,2849.59,2849.59,2849.59,2849.91,2855.93,
			  2867.94,2879.05,2879.15,2879.15,2879.15,2859.09,2845.05,2858.88,2871.36,2866.93,
			  2866.93,2866.93,2851.84,2848.38,2845.76,2850.04,2852.48,2852.48,2852.48,2852.48,
			  2866.92,2850.69,2857.88,2849.01,2849.01,2849.01,2816.33,2780.04,2780.47,2780.47,
			  2780.47,2780.47,2780.47,2792.96,2778.27,2791.57,2787.36,2791.88,2791.88,2791.88,
			  2781.95,2767.82,2733.24,2710.03,2705.34,2705.34,2705.34,2726.47,2725.66,2705.64,
			  2724.47,2757.96,2757.96,2757.96,2799.45,2785.22,2820.29,2812.83,2806.28,2806.28,
			  2806.28,2809.92,2809.92,2831.99,2857.85,2843.41,2843.41,2843.41,2817.20,2866.00,
			  2859.51,2822.37,2824.05,2824.05,2824.05,2824.05,2889.87,2865.37,2886.23,2925.67,
			  2925.67,2925.67,2897.37,2851.42,2863.24,2863.12,2887.16,2887.16,2887.16,2887.16,
			  2893.82,2879.32,2889.32,2868.22,2868.22,2868.22,2868.22,2865.37,2828.42,2835.78,
			  2855.80,2855.80,2855.80,2855.80,2857.11,2859.17,2859.78,2890.06,2890.06,2890.06,
			  2919.14,2931.78,2916.49,2944.82,2918.22,2918.22,2918.22,2927.67,2924.10,2934.91,
			  2945.09,2930.80,2930.80,2930.80,2930.80,2909.83,2909.83,2885.53,2867.94,2867.94,
			  2867.94,2881.09,2872.62,2880.10,2882.02,2861.70,2861.70,2861.70,2868.96,2878.28,
			  2876.93,2883.81,2883.81,2883.81,2883.81,2897.73,2898.36,2882.84,2886.21,2880.79,
			  2880.79,2880.79,2875.72,2886.80,2892.62,2904.90,2898.99,2898.99,2898.99,2898.86,
			  2898.86,2908.90,2919.44,2940.95,2940.95,2940.95,2983.93,3002.66,3046.76,3019.55,
			  3024.02,3024.02,3024.02,3024.02,2990.78,2965.45,2980.64,2958.45,2958.45,2958.45,
			  2934.31,2966.00,2999.57,3027.39,3053.14,3053.14,3053.14,3053.14,3088.47,3100.37,
			  3089.47,3070.15,3070.15,3070.15,3069.49,3087.73,3055.01,3019.38,3026.05,3026.05,
			  3026.05,3013.38,3007.03,3018.63,3014.18,3006.96,3006.96,3006.96,2991.90,3001.88,
			  3000.14,2989.58,2972.18,2972.18,2972.18,2993.74,3005.50,3012.65,3028.16,3031.31,
			  3031.31,3031.31,3031.31,3057.55,3090.30,3087.34,3088.78,3088.78,3088.78,3088.78,
			  3055.93,3056.37,3088.47,3079.88,3079.88,3079.88,3087.58,3110.20,3149.70,3167.18,
			  3185.26,3185.26,3185.26,3188.69,3202.44,3219.85,3193.80,3177.57,3177.57,3177.57,
			  3177.57,3154.55,3140.25,3145.39,3176.89,3176.89,3176.89,3176.89,3197.20,3194.70,
			  3198.29,3173.59];


generarAleatorios();
ContinuarTRM();
calcular(2190);
Igualar();
console.log(TRM.length);

//console.log("Fecha:",fecha);
graficar();
graficar2();
graficar3();
graficar4();
function generarAleatorios() {
	for (var i = 0; i < 9896; i++) {
		aleatorios.push(Math.random());
		}
}
function Igualar(){
	IgualarInflacion();
	IgualarIntervencion();
	IgualarColocacion();
}
function ContinuarTRM(){
	for (var i = 0; i < 2234; i++) {
		TRM.push(TRM[TRM.length-1]+Variacion(aleatorios[i]))
	}
}
function IgualarInflacion(){
	var aleatorio=[],value,sig;
	for (var i = 2234; i < 4788; i++) {
		aleatorio.push(aleatorios[i]);
	}
	for (var i = 0; i < TRM.length; i++) {
		value=TRM[i];
		sig=TRM[i+1];
		if (value===sig) {
			inflacion.push(inflacion[inflacion.length-1]);
		}else if (value>sig) {
			inflacion.push(inflacion[inflacion.length-1]+Aumentar(aleatorio[i]));
		}else if (value<sig){
			inflacion.push(inflacion[inflacion.length-1]+Diminuir(aleatorio[i]));
		}
	}
}
function IgualarIntervencion(){
	var aleatorio=[],value,sig,mas,menos;
	for (var i = 4788; i < 7342; i++) {
		aleatorio.push(aleatorios[i]);
	}
	for (var i = 0; i < inflacion.length; i++) {
		value=inflacion[i];
		sig=inflacion[i+1];
		if (value===sig) {
			intervencion.push(intervencion[intervencion.length-1]);
			//colocacion.push(colocacion[colocacion.length-1]);
		}else if (value>sig) {
			menos=Diminuir(aleatorio[i]);
			intervencion.push(intervencion[intervencion.length-1]+menos);
			//colocacion.push(colocacion[colocacion.length-1]+menos);
		}else if (value<sig) {
			mas=Aumentar(aleatorio[i]);
			intervencion.push(intervencion[intervencion.length-1]+mas);
			//colocacion.push(colocacion[colocacion.length-1]+mas);
		}
	}
}
function IgualarColocacion(){
	var aleatorio=[],value,sig,mas,menos;
	for (var i = 7342; i < 9896; i++) {
		aleatorio.push(aleatorios[i]);
	}
	for (var i = 0; i < intervencion.length; i++) {
		value=intervencion[i];
		sig=intervencion[i+1];
		if (value===sig) {
			colocacion.push(colocacion[colocacion.length-1]);
		}else if (value>sig) {
			colocacion.push(colocacion[colocacion.length-1]+DiminuirColocacion(aleatorio[i]));
		}else if (value<sig) {
			colocacion.push(colocacion[colocacion.length-1]+AumentarColocacion(aleatorio[i]));
		}
	}
}
function calcular(dias) {
        //la fecha
        var TuFecha = new Date(2017,12,0);
        //console.log(TuFecha);
        for (var i = 0; i < dias ; i++) {
            //nueva fecha sumada
            TuFecha.setDate(TuFecha.getDate() + 1);
            //formato de salida para la fecha
            t=TuFecha.getFullYear() + '-' +("0"+(TuFecha.getMonth() + 1)).slice (-2) + '-' + ("0"+TuFecha.getDate()).slice (-2) ;
            fecha.push(t);
        }
}

function Diminuir(aleatorio){
      if (aleatorio>=0 && aleatorio<0.05) {
        return -0.02;
      }else if (aleatorio>=0.05 && aleatorio<0.1) {
        return -0.015; 
      } else if (aleatorio>=0.1 && aleatorio<0.25) {
        return -0.01;
      } else if (aleatorio>=0.25 && aleatorio<0.4) {
        return -0.005
      } else if (aleatorio>=0.4 && aleatorio<0.6) {
        return -0.01;
      } else if (aleatorio>=0.6 && aleatorio<0.75) {
        return -0.005;
      } else if (aleatorio>=0.75 && aleatorio<0.9) {
        return -0.01;
      } else if (aleatorio>=0.9 && aleatorio<0.95) {
        return -0.015;
      } else if (aleatorio>=0.95 && aleatorio<1) {
        return -0.02;
      }
}
function Aumentar(aleatorio){
      if (aleatorio>=0 && aleatorio<0.05) {
        return 0.02;
      }else if (aleatorio>=0.05 && aleatorio<0.1) {
        return 0.015; 
      } else if (aleatorio>=0.1 && aleatorio<0.25) {
        return 0.01;
      } else if (aleatorio>=0.25 && aleatorio<0.4) {
        return 0.005
      } else if (aleatorio>=0.4 && aleatorio<0.6) {
        return 0.01;
      } else if (aleatorio>=0.6 && aleatorio<0.75) {
        return 0.005;
      } else if (aleatorio>=0.75 && aleatorio<0.9) {
        return 0.01;
      } else if (aleatorio>=0.9 && aleatorio<0.95) {
        return 0.015;
      } else if (aleatorio>=0.95 && aleatorio<1) {
        return 0.02;
      } 
}
function DiminuirColocacion(aleatorio){
      if (aleatorio>=0 && aleatorio<0.05) {
        return -0.3;
      }else if (aleatorio>=0.05 && aleatorio<0.1) {
        return -0.2; 
      } else if (aleatorio>=0.1 && aleatorio<0.25) {
        return -0.1;
      } else if (aleatorio>=0.25 && aleatorio<0.4) {
        return -0.05;
      } else if (aleatorio>=0.4 && aleatorio<0.6) {
        return -0.02;
      } else if (aleatorio>=0.6 && aleatorio<0.75) {
        return -0.05;
      } else if (aleatorio>=0.75 && aleatorio<0.9) {
        return -0.1;
      } else if (aleatorio>=0.9 && aleatorio<0.95) {
        return -0.2;
      } else if (aleatorio>=0.95 && aleatorio<1) {
        return -0.3;
      }
}
function AumentarColocacion(aleatorio){
      if (aleatorio>=0 && aleatorio<0.05) {
        return 0.3;
      }else if (aleatorio>=0.05 && aleatorio<0.1) {
        return 0.2; 
      } else if (aleatorio>=0.1 && aleatorio<0.25) {
        return 0.1;
      } else if (aleatorio>=0.25 && aleatorio<0.4) {
        return 0.05;
      } else if (aleatorio>=0.4 && aleatorio<0.6) {
        return 0.02;
      } else if (aleatorio>=0.6 && aleatorio<0.75) {
        return 0.05;
      } else if (aleatorio>=0.75 && aleatorio<0.9) {
        return 0.1;
      } else if (aleatorio>=0.9 && aleatorio<0.95) {
        return 0.2;
      } else if (aleatorio>=0.95 && aleatorio<1) {
        return 0.3;
      } 
}
function Cuotas(plazo,dia){
	        //la fecha
      var TuFecha = new Date(dia);
        //console.log(TuFecha);
    for (var i = 0; i < plazo ; i++) {
        //nueva fecha sumada
        TuFecha.setDate(TuFecha.getDate() + 30);
        //formato de salida para la fecha
        mes=TuFecha.getFullYear() + '-' +("0"+(TuFecha.getMonth() + 1)).slice (-2) + '-' + ("0"+TuFecha.getDate()).slice (-2) ;
        cuotas.push(mes);
     }
     for (var i = 0; i < cuotas.length; i++) {
     	index=fecha.indexOf(cuotas[i]);
     	IxC.push(colocacion[index]);
     }
}function Variacion(aleatorio){
      //var aleatorio=Math.random();
      if (aleatorio>=0 && aleatorio<0.05) {
        return 10;
      }else if (aleatorio>=0.05 && aleatorio<0.1) {
        return 5; 
      } else if (aleatorio>=0.1 && aleatorio<0.25) {
        return  2.5;
      } else if (aleatorio>=0.25 && aleatorio<0.4) {
        return  1;
      } else if (aleatorio>=0.4 && aleatorio<0.6) {
        return 0.00;
      } else if (aleatorio>=0.6 && aleatorio<0.75) {
        return -1;
      } else if (aleatorio>=0.75 && aleatorio<0.9) {
        return -2.5;
      } else if (aleatorio>=0.9 && aleatorio<0.95) {
        return -5;
      } else if (aleatorio>=0.95 && aleatorio<1) {
        return -10;
      } 
}
function graficar(){

	  google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Fecha Diaria');
      data.addColumn('number', 'TRM');
      for (var i = 0; i < fecha.length; i++) {
        data.addRows([[fecha[i],TRM[i]]]);
      }
      var options = {
        chart: {
          title: 'Comportamiento del TRM en el 2018',
          subtitle: 'TRM Vs Tiempo'
        },
        width: 700,
        height: 400
      };

      var chart = new google.charts.Line(document.getElementById('TRM'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
}
function graficar2(){

	  google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    	var min=2,max=4,meta=3;
      // for (var i = 730; i < 1095; i++) {
      //   //x.push("2018-"+(10+i));
      //   y3.push((y3[y3.length-1])+CalcularTRM(aleatorios[i]));
      // }
      // console.log(y3[y3.length-1]);
      
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Fecha Diaria');
      data.addColumn('number', 'Inflacion');
      data.addColumn('number', 'Meta de la Inflacion');
      data.addColumn('number', 'Rango Minima de la Inflacion');
      data.addColumn('number', 'Rango Maximo de la Inflacion');
      for (var i = 0; i < fecha.length; i++) {
        data.addRows([[fecha[i],inflacion[i],meta,min,max]]);
      }
      var options = {
        chart: {
          title: 'Comportamiento de la Inflacion 2018',
          subtitle: 'Inflacion Vs Tiempo'
        },
        width: 700,
        height: 400
      };

      var chart = new google.charts.Line(document.getElementById('inflacion'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
}
function graficar3(){

	  google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // for (var i = 730; i < 1095; i++) {
      //   //x.push("2018-"+(10+i));
      //   y3.push((y3[y3.length-1])+CalcularTRM(aleatorios[i]));
      // }
      // console.log(y3[y3.length-1]);
      
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Fecha Diaria');
      data.addColumn('number', 'Tasa de Intervencion');
      for (var i = 0; i < fecha.length; i++) {
        data.addRows([[fecha[i],intervencion[i]]]);
      }
      var options = {
        chart: {
          title: 'Comportamiento de la Tasa de Intervencion 2018',
          subtitle: 'Tasa de Intervencion Vs Tiempo'
        },
        width: 700,
        height: 400
      };

      var chart = new google.charts.Line(document.getElementById('intervencion'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
 }
function graficar4(){

	  google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // for (var i = 730; i < 1095; i++) {
      //   //x.push("2018-"+(10+i));
      //   y3.push((y3[y3.length-1])+CalcularTRM(aleatorios[i]));
      // }
      // console.log(y3[y3.length-1]);
      
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Fecha Diaria');
      data.addColumn('number', 'Tasa de Colocación');
      for (var i = 0; i < fecha.length; i++) {
        data.addRows([[fecha[i],colocacion[i]]]);
      }
      var options = {
        chart: {
          title: 'Comportamiento de la Tasa de Colocación 2018',
          subtitle: 'Tasa de Colocación Vs Tiempo'
        },
        width: 700,
        height: 400
      };

      var chart = new google.charts.Line(document.getElementById('colocacion'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
 }
$(document).ready(function(){
		$(".btnSimular").on("click",function(){
		var pago,interes,abono,saldo,inter,arriba,abajo,IPC,Acubono=0,
		plazo= $(".txtplazo").val().trim(),
		valor= $(".txtvalor").val().trim(),
		fdate= $(".txtfecha").val().trim();
		console.log(fdate);
		if (valor>=1000000) {
			if (valor==" " || plazo==0 || fdate==" ") {
			alert("Por Favor... Llenar todos los campos");
			}else{
				let html = "";
				Cuotas(plazo,fechainicial);
				html+="<thead>";
				html+="<tr>";
				html+="<th><center>Cuota</center></th>";
				html+="<th><center>Fecha de Cuota</center></th>";
				html+="<th><center>Tasa Variable</center></th>";
				html+="<th><center>Intereses</center></th>";
				html+="<th><center>Cuota Mensual</center></th>";
				html+="<th><center>Abono Capital</center></th>";
				html+="<th><center>Abono Acumulado </center></th>";
				html+="<th><center>Saldo</center></th>";
				html+="</tr>";
				html+="</thead>";
				html+="";
				inter=IxC[0]/100;
				IPC= (Math.pow((1+inter),(1/12)))-1;
				// r=1/(1+IPC)
				// pago=(valor*(IPC/(1-(Math.pow(r,plazo)))));
				arriba=(Math.pow(1+IPC,plazo)*IPC);
				abajo=(Math.pow(1+IPC,plazo)-1);
				pago=valor*(arriba/abajo);
				interes=IPC*valor;
				abono=(pago-interes);
				//pago=abono + interes ;
				//saldo=(valor-(pago-interes));
				Acubono+=abono;
				saldo=valor - abono;
				Ycuota.push(pago);
				Yinteres.push(interes);
				Xcuota.push(0);
				//console.log("IPC 0 "+IPC);
				html += "<tr>";
		        html +=    "<td><center>"+0+"</center></td>";
		        html +=    "<td><center>"+0+"</center></td>";
		        html +=    "<td><center>"+0+"</center></td>";
		        html +=    "<td><center>"+0.00+"</center></td>";
		        html +=    "<td><center>"+0.00+"</center></td>";
		        html +=    "<td><center>"+0.00+"</center></td>";
		        html +=    "<td><center>"+0.00+"</center></td>";
		        html +=    "<td><center>"+valor+"</center></td>";
		        html +="</tr>";
		        console.log("Intereses: 0 "+IPC)
		        // alert(Math.pow(r,plazo));
		        // alert((0.0108/(1-(Math.pow(r,plazo)))));
				for (var i = 0; i < plazo; i++) {
					Xcuota.push(i);
					html += "<tr>"
		            html +=    "<td><center>"+(i+1)+"</center></td>";
		            html +=    "<td><center>"+cuotas[i]+"</center></td>";
		            html +=    "<td><center>"+(IPC*100).toFixed(2)+" %"+"</center></td>";
		            html +=    "<td><center>"+interes.toFixed(2)+"</center></td>";
		            html +=    "<td><center>"+parseFloat(pago).toFixed(2)+"</center></td>";
		            html +=    "<td><center>"+parseFloat(abono).toFixed(2)+"</center></td>";
		            html +=    "<td><center>"+parseFloat(Acubono).toFixed(2)+"</center></td>";
		            html +=    "<td><center>"+saldo.toFixed(2)+"</center></td>";
		            html +="</tr>"
		            // inter=CalcularInteres()
		            //pago=(valor*(IPC/(1-(Math.pow(r,plazo-i)))));
		            inter=IxC[i]/100;
					IPC= (Math.pow((1+inter),(1/12)))-1;
					//r=1/(1+IPC)
					//pago=(valor*(IPC/(1-(Math.pow(r,plazo-i)))));
					arriba=(Math.pow(1+IPC,plazo-(i+1))*IPC);
					abajo=(Math.pow(1+IPC,plazo-(i+1))-1);
					pago=saldo*(arriba/abajo);
		            interes=(saldo*IPC)
		            abono=pago-interes.toFixed(2);
		            abono=abono;
		            Acubono+=abono;
		            //pago=abono + interes;
		            saldo=saldo - abono;
		            console.log("Intereses:"+i+" "+ IPC);
		            Ycuota.push(pago);
					Yinteres.push(interes);
				}
				$('#Resultados').html(html);           
			}
		}else{
			alert("El Monto Minimo es de $ 1'000.000.00")
		}
    

	});
$(".btnLimpiar").on("click",function(){
		Ycuota=[];
		Xcuota=[];
		Yinteres=[];
		cuotas=[];
		IxC=[];
		$(".txtplazo").val(0)
		$(".txtvalor, .txtfecha").val("");
		$('#Resultados').html('');
		$('#grafica').html('');
		$('#interes').html('');
		//location.reload();
	});


	$(".btnGraficar").on("click",function (){

		//drawChart();
		google.charts.load('current', {'packages':['line']});
      	google.charts.setOnLoadCallback(drawChart);
		function drawChart(){
			data = new google.visualization.DataTable();
	     	data.addColumn('number', 'Tiempo');
	      	data.addColumn('number', 'Cuota');
	      	data.addColumn('number', 'Intereses');
	     	for (var i = 0; i < Xcuota.length; i++) {
	        	data.addRows([[Xcuota[i],Ycuota[i],Yinteres[i]]]);
	      	}
	      	var options = {
	        chart: {
	          title: 'Comportamiento de las Intereses Vs Cuotas ',
	          subtitle: 'Intereses Vs Tiempo y Cuotas Vs Tiempo '
	        },
	        width: 600,
	        height: 400
	      };

	      var chart = new google.charts.Line(document.getElementById('grafica'));

	      chart.draw(data, google.charts.Line.convertOptions(options));
		}
	});
	$("#btnAleatorios").on("click",function (){
		let html = "";
		html+="<thead>";
		html+="<tr>";
		html+="<th><center>Id</center></th>";
		html+="<th><center>Aleatorio</center></th>";
		html+="</tr>";
		html+="</thead>";
		html+="";
		for (var i = 0; i < aleatorios.length; i++) {
			html += "<tr>"
            html +=    "<td><center> "+(i+1)+"</center></td>"
            html +=    "<td><center> "+aleatorios[i].toFixed(5)+"</center></td>"
            html +="</tr>"
		}
		$('#MostrarAleatorios').html(html);   
	});
	$(".txtfecha").on("change",function (){
		var date=$(".txtfecha").val().trim(),
			plazo=$(".txtplazo").val().trim();
		for (var i = 0; i < 1460; i++) {
			if (fecha[i]==date.toString()) {
				$("#interes").html(colocacion[i].toFixed(5)+"%");
				console.log("encontrador");
				fechainicial=date;
				break;
			}
		}

	});
	

});
function Aleatorio(){
	return Math.random();
}
function CalcularInteres(){
	var aleatorio=Math.random();

	if (aleatorio>=0 && aleatorio<0.05) {
		return 0.02;
	}else if (aleatorio>=0.05 && aleatorio<0.1) {
		return 0.015; 
	} else if (aleatorio>=0.1 && aleatorio<0.25) {
		return 0.01;
	} else if (aleatorio>=0.25 && aleatorio<0.4) {
		return 0.005
	} else if (aleatorio>=0.4 && aleatorio<0.6) {
		return 0.00;
	} else if (aleatorio>=0.6 && aleatorio<0.75) {
		return -0.005;
	} else if (aleatorio>=0.75 && aleatorio<0.9) {
		return -0.01;
	} else if (aleatorio>=0.9 && aleatorio<0.95) {
		return -0.015;
	} else if (aleatorio>=0.95 && aleatorio<1) {
		return -0.02;
	} 
}
