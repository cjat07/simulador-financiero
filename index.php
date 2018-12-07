<!DOCTYPE html>
<html lang="es">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Simulador Financiero</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet"  href="bootstrap/estilo.css">

  </head>

<body>

    <!-- Navigation navbar navbar-default navbar-static-top-->
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" style="color: white;" href="">Simulador Financiero</a>
    </div>
    <ul class="nav navbar-nav">
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a class="button" id="btnAleatorios" data-toggle="modal" data-target="#modalAleatorio" style="color: white;"><span class="glyphicon glyphicon-list-alt"></span> Aleatorios</a></li>
      <li><a href="" style="color: white;"><span class=""></span> Inflación</a></li>
      <li><a href="" style="color: white;"><span class=""></span> Tasa de Interés del Banco</a></li>
      <li><a href="" style="color: white;"><span class=""></span>   </a></li>
      <!-- <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> -->
    </ul>
  </div>
</nav>

    <!-- Page Content 
    <div id="demo" class="collapse">
Lorem ipsum dolor text....
</div>-->
    <br><br>

<section>
	<div class="container">
		 <center><h1>Indicadores Economicos</h1></center>
		<hr>
		<div class="row " id="demo">
			  <div class="col-md-8 col-md-offset-2" id="TRM"> </div>
		</div>
		<br><br><br>
		<div class="row">
			  <div class="col-md-8 col-md-offset-2 " id="inflacion"></div>
		</div>
		<br><br><br>
		<div class="row">
			<div class="col-md-8 col-md-offset-2" id="intervencion"></div>
		</div>
		<br><br><br>
		<div class="row">
			<div class="col-md-8 col-md-offset-2" id="colocacion"></div>
		</div>
		<br><br><br>
	</div>

</section>
<hr>
<section>
	<div class="container">
		<br><br>
		<h1 align="center">Simula tu Crédito de Libre Inversión</h1>
		<br>
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<p>Por favor, Ingresar los siguientes datos :</p>
			</div>
			<br><br>
			<div class="col-md-8 col-md-offset-2">
				<div class="form-group">
					<label>Valor del Préstamo :</label>
					<input type="number" class="form-control txtvalor" id="txtvalor">
				</div>
				<div class="form-group">
					<label>Plazo del Préstamo :</label>
					<select class="form-control txtplazo">
						<option value="0">Seleccionar Opción</option>
						<option value="36">36 meses</option>
						<option value="48">48 meses</option>
						<option value="60">60 meses</option>
					</select>
				</div>
				<div class="form-group">
					<label>Seleccionar Fecha :</label>
					<input type="date" class="form-control txtfecha">
				</div>
				<div class="form-group">
					<p id="interes" style="color: white; background: green;"></p>
				</div>
				<br>
				<div class="form-group">
					<center>
						<button class="btn btn-success btnSimular">Simular</button>
						<button class="btn btn-warning btnLimpiar">Limpiar</button>
						<button class="btn btn-primary btnGraficar" data-toggle="modal" data-target="#myModal">Gráficar</button>
					</center>
				</div>
			</div>
		</div>
		<br>
		<hr>
		<br>
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<div id="grafica">
					
				</div>
			</div>
		</div>
		<br>
		<hr>
		<br>
		<div class="row">
			<div class="col-md-8 col-md-offset-2" >
				<table class="table table-striped" id="Resultados" width="1000">
					
				</table>
			</div>
			<div class="col-md-8 col-md-offset-2" id="linechart_material"></div>
		</div>
		
	</div>
</section>
<!-- modal de graficar el simulador crediticio -->
<!-- <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg" >
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <center><h4 class="modal-title">Cuotas Vs Meses</h4></center>
      </div>
      <div class="modal-body">
        <div class="modal-container">
        	<div id="grafica">
        		
        	</div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div> -->
<!-- modal de graficar el simulador crediticio -->

<!-- modal de Aleatorios -->
<div id="modalAleatorio" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg" >

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <center><h4 class="modal-title">Números Aleatorios Generados</h4></center>
      </div>
      <div class="modal-body">
        <div>
        	<table class="table table-striped" id="MostrarAleatorios">
        		
        	</table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>

  </div>
</div>
<!-- modal de Aleatorios -->

  	
  

    <!-- Bootstrap core JavaScript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="js/simulador.js"></script>
   <!--  <script src="js/prueba.js"></script> -->

    <!-- <script type="jquery/jquery.min.js"></script> -->
    <!-- <script type="bootstrap/js/bootstrap.min.js"></script> -->



  </body>

</html>

