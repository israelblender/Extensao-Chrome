function ShowMainInterface(){
	$("#button-inject").show();
	$("#button-copy").show();
	
	$("#button-change").show();
	$("#button-remove").show();

	$("#button-save").hide();
	$("#button-cancel").hide();
	

	$("#input-title").attr("readonly", true);
	$("#input-macro").attr("readonly", true);
	
	$("#input-macro").attr("readonly", true);
	$("#input-macro").attr("placeholder", "Macro Aqui");
}

function salutation(){
			SAUDACAO = "";
			dt = new Date();
			hr = dt.getHours();
			if (hr >= 0 && hr < 12){
				SAUDACAO = "bom dia"};
			if (hr >= 12 && hr < 18){
				SAUDACAO = "boa tarde"};
			if (hr >= 18 && hr <=23 ){SAUDACAO = "boa noite"};
			return SAUDACAO;
		}
		function formatMacro(macro){
			for (parser in getVariables()){
				macro = macro.replaceAll(parser, parsers[parser])
			}
			return macro;
		}
		function getVariables(){
			parsers = {
				APRESENTACAO : "Olá, Francisco,",
				NOME: "Francisco",
				TELEFONECONTRAPARTE: "(78) 95648-5412",
				TELEFONE: "(78) 94524-5789",
				CONTRAPARTE: "Ana",
				ORIGEM: "Olimpio Oliveira - Avenida Santa Clara - Largo do Açude Novo",
				DESTINO: "R. Joaquim José do Valê, 568-762 - Jardim Tavares",
				DATA: "10/03",
				HORA: HOURRIDE || "15:22",
				CIDADE: CITY || "Campina Grande",
				CUSTO_KM: VALUEPERKILOMETER || "6,23",
				PRECO_INICIAL: INITIALPRICE || "14,20",
				PRECO_TOTAL: TOTALPRICE || "15,00",
				RENDA_DRIVER: INCOMEFORDRIVER || "13,00",
				PROTOCOLO: "874648425457",
				SAUDACAO: salutation(),
				CORRIDA: "21547874545757",
				LINK_MAGELLAN: "__link_magellan__",
				ID_DRV: "21634564646456",
				ID_PAX: "45245674857857",
			};
		return parsers;
		}
function bluidVariablesList(){
		for (var variable in getVariables()){
			//var option = $("<option>");
			//option.text(variable);
			$("#variables").append($("<option>", {value:variable, text:variable}));
		}
}
function enableFields(){
			
			localStorage.setItem("config_msapp_input_title", $("#input-title").val());
	
			$("#variables").attr("disabled", false);
			$("#button-inject").hide();
			$("#button-copy").hide();
			
			$("#button-change").hide();
			$("#button-remove").hide();
			
			$("#button-save").show();
			$("#button-cancel").show();
			
			$("#input-title").attr("readonly", false);
			$("#input-macro").attr("readonly", false);
			
			$("#input-title").focus();
			$("#input-title").select();
			
			showAnimationEdit();
		}
		function showAnimationEdit(){
			$("#panel-title").removeClass("animation-panel-title-close");
			$("#panel-title").addClass("animation-panel-title-open");

			$("#button-add").removeClass("animation-button-add-close");
			$("#button-add").addClass("animation-button-add-open");

			$("#input-macro").css("max-width", "100%");
			$("#input-macro").css("height", "100%");
			$("#panel-macro").removeClass("animation-panel-macro-close");
			$("#panel-macro").addClass("animation-panel-macro-open");

			$("#panel-variables").removeClass("animation-panel-close");
			$("#panel-variables").css("display", "inline");
			$("#panel-variables").addClass("animation-panel-open");
			setTimeout(function(){$("#button-add").hide();}, 200);//evita botao ficar abaixo de titulo da macro
			$("html, body").animate({ scrollTop: $(document).height() }, 1000);
		}
		function showAnimationClose(){
			$("#panel-title").css("width", "100px");
			$("#panel-title").removeClass("animation-panel-title-open");
			$("#panel-title").addClass("animation-panel-title-close");

			$("#button-add").removeClass("animation-button-add-open");
			$("#button-add").addClass("animation-button-add-close");

			$("#panel-macro").removeClass("animation-panel-macro-open");
			$("#panel-macro").addClass("animation-panel-macro-close");

			$("#panel-variables").removeClass("animation-panel-open");
			$("#panel-variables").addClass("animation-panel-close");
			setTimeout(function(){$("#button-add").show();}, 500);//mostra botao apos 500 milesimos
		}
		
		
		function bluidVariablesList(){
			for (var variable in getVariables()){
				//var option = $("<option>");
				//option.text(variable);
				$("#variables").append($("<option>", {value:variable, text:variable}));
			}
		}
document.addEventListener('DOMContentLoaded', 
	function () {
		LAST_TITLE = "Corrida cancelada | sem custos";
		LAST_MACRO = "Olá Fulano, bom dia.\nAgradecemos pelo contato\n\nSua corrida do dia 10/03 às 15:22 foi cancelada sem nenhum custo gerado.Esperamos ter esclarecido.\n\nAbraços."
		LAST_MACRO_EDIT = "APRESENTACAO.\nAgradecemos pelo contato\n\nSua corrida do dia DATA às HORA foi cancelada sem nenhum custo gerado.Esperamos ter esclarecido.\n\nAbraços."
		$("#input-title").val(LAST_TITLE);
		$("#input-macro").val(LAST_MACRO)
		$(".notunderstood").click(function(){
			chrome.tabs.create({url: "https://goo.gl/forms/TgL9m0KlSWm4aj0i2"});
		});

		$("#button-add-understood").click(function(){
			$("#input-title").val("");	
			$("#input-macro").val("");
			enableFields();
		});
		$("#button-cancel").click(function(){
			ShowMainInterface();//Volta as configuracoes da interface principal
			$("#button-inject").show();
			$("#button-copy").show();

			$("#input-title").val(LAST_TITLE);
			$("#input-macro").val(LAST_MACRO);

			$("#variables").attr("disabled", true);

			showAnimationClose();
		});
		$("#button-change").click(function(){
			$("#input-macro").val(LAST_MACRO_EDIT);

			enableFields();

			$("#panel-macro").css("max-height", "700px");
		});

		
		
		bluidVariablesList();
	
	})