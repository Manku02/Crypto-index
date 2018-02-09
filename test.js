console.log($.get( "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR" ));

$(document).ready(function(){
	
	
	var BTC,ETH,LTC,EOS,BCH,DOGE,NQCrypto;
	var BTC1=7611.61,ETH1=751.8879,LTC1=137.9205,EOS1=7.48266,BCH1=972.625,DOGE1=0.004256,NQCrypto1=533302;
	var BTCw=0.238095,ETHw=0.142857,LTCw=0.285714,EOSw=0.047619,BCHw=0.095238,DOGEw=0.190476,NQCryptow=1;
	var BTC2=135.3,ETH2=1.350787,LTC2=4.29983,EOS2=1.784643,BCH2=618.5207,DOGE2=0.00043,NQCrypto2=533302;
		
		
	self.setInterval(function(){
		$.get( "https://min-api.cryptocompare.com/data/price", { fsym:'BTC', tsyms:'USD,EUR' } )
	    .done(function( data ) {
				//console.log( "Data Loaded - USD: " + data.USD + " EUR: " + data.EUR );
				$('#id_data_btc').text("BTCUSD::" + data.USD )
				BTC=data.USD;
				$('#id_data_btc1').text("BTC exposure%::" + (BTCw*100))
				$('#id_data_btc2').text("BTC returns since inception % " + 100*((BTC/BTC2)-1) )

				
		});
		
		$.get( "https://min-api.cryptocompare.com/data/price", { fsym:'ETH', tsyms:'USD,EUR' } )
	    .done(function( data ) {
				//console.log( "Data Loaded - USD: " + data.USD + " EUR: " + data.EUR );
				$('#id_data_eth').text("ETHUSD:: " + data.USD);
				ETH=data.USD;
				$('#id_data_eth1').text("ETH exposure%::" + (ETHw*100))
				$('#id_data_eth2').text("ETH returns since inception % " + 100*((ETH/ETH2)-1) )
		});
		
		$.get( "https://min-api.cryptocompare.com/data/price", { fsym:'LTC', tsyms:'USD,EUR' } )
	    .done(function( data ) {
				//console.log( "Data Loaded - USD: " + data.USD + " EUR: " + data.EUR );
				$('#id_data_ltc').text("LTCUSD:: " + data.USD);
				LTC=data.USD;
				$('#id_data_ltc1').text("LTC exposure%::" + (LTCw*100))
				$('#id_data_ltc2').text("LTC returns since inception % " + 100*((LTC/LTC2)-1) )
		});

		$.get( "https://min-api.cryptocompare.com/data/price", { fsym:'EOS', tsyms:'USD,EUR' } )
	    .done(function( data ) {
				//console.log( "Data Loaded - USD: " + data.USD + " EUR: " + data.EUR );
				$('#id_data_eos').text("EOSUSD:: " + data.USD);
				EOS=data.USD;
				$('#id_data_eos1').text("EOS exposure%::" + (EOSw*100))
				$('#id_data_eos2').text("EOS returns since inception % " + 100*((EOS/EOS2)-1) )
		});

		$.get( "https://min-api.cryptocompare.com/data/price", { fsym:'BCH', tsyms:'USD,EUR' } )
	    .done(function( data ) {
				//console.log( "Data Loaded - USD: " + data.USD + " EUR: " + data.EUR );
				$('#id_data_bch').text("BCHUSD:: " + data.USD);
				BCH=data.USD;
				$('#id_data_bch1').text("BCH exposure%::" + (BCHw*100))
				$('#id_data_bch2').text("BCH returns since inception % " + 100*((BCH/BCH2)-1) )
		});
		
			$.get( "https://min-api.cryptocompare.com/data/price", { fsym:'DOGE', tsyms:'USD,EUR' } )
	    .done(function( data ) {
				//console.log( "Data Loaded - USD: " + data.USD + " EUR: " + data.EUR );
				$('#id_data_doge').text("DOGEUSD:: " + data.USD);
				DOGE=data.USD;
				$('#id_data_doge1').text("DOGE exposure%::" + (DOGEw*100))
				$('#id_data_doge2').text("DOGE returns since inception % " + 100*((DOGE/DOGE2)-1) )
		});
		
		NQCrypto=NQCrypto1*
		(1 + 
		((BTCw*((BTC/BTC1)-1.0)))+
		((ETHw*((ETH/ETH1)-1.0)))+
		((LTCw*((LTC/LTC1)-1.0)))+
		((BCHw*((BCH/BCH1)-1.0)))+
		((EOSw*((EOS/EOS1)-1.0)))+
		((DOGEw*((DOGE/DOGE1)-1.0)))
		
		)
		
		
		
		
		$('#id_data_nqcrypto').text("Nasdaq Crypto Index:: " + NQCrypto);
		var nqr=((NQCrypto/100)-1)*100;
		$('#id_data_nqcrypto1').text("Nasdaq Crypto Index Returns since inception % " + nqr);
		
		
		
	},5000);

});