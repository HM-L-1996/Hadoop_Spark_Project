

      /* anychart.onDocumentReady(function () {
         var data = [ 
             { x : "4", value : 1111}, 
             { x : "1", value : 1}, 
             { x : "Python", value : 1}, 
             { x : "소프트웨어", value : 1}, 
             { x : "JAVA", value : 1}, 
             { x : "C++", value : 1 }, 
             { x : "HTML", value : 61},
             { x : "4", value : 51}, 
             { x : "1", value : 14}, 
             { x : "Python", value : 23}, 
             { x : "소프트웨어", value : 54}, 
             { x : "JAVA", value : 52}, 
             { x : "C++", value : 45 }, 
             { x : "HTML", value : 61},
             { x : "1", value : 14}, 
             { x : "Python", value : 23}, 
             { x : "소프트웨어", value : 54}, 
             { x : "JAVA", value : 52}, 
             { x : "C++", value : 45 }, 
             { x : "HTML", value : 61},
             ]; 
             var chart = anychart.tagCloud(data);
             
             chart.selected().fill("#808080"); //클릭했을 때 글씨 색 지정 
             chart.textSpacing(15); //글자간격
            //  chart.colorRange().enabled(true); //범위
             chart.angles([90,0]); //각도
             chart.container("container");               
             chart.draw();
              }); */
              
        
	// wordcloud 생성 스크립트             
function makecloud() {
	let cldate = document.getElementById("seldate").value;

	const xhttp = new XMLHttpRequest();
	// xhttp.onreadystatechange = function() {
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data = this.responseText;

			data = JSON.parse(data);

			var TestData = [];

			data.forEach(function(element) {
				TestData.push({ "x": element.token, "value": element.count });
			});

			console.log(TestData);

			anychart.onDocumentReady(function() {

				document.getElementById("container").innerHTML = "";

				var chart = anychart.tagCloud(TestData);
				chart.selected().fill("#808080"); //클릭했을 때 글씨 색 지정 
				chart.textSpacing(15); //글자간격
				//  chart.colorRange().enabled(true); //범위
				chart.angles([0, 0]); //각도
				chart.container("container"); // wordcloud 생성할 컨테이너        
				chart.draw();	// wordcloud 생성 명령어
			});
		}
	}
	xhttp.open("GET", "getcloud?cldate=" + cldate, true);
	xhttp.send();
}
         
function TransferDay(Day) {
	Onemonth = 1;
	Twomonth = 2;
	switch (Day) {
		case 1_1:
			a = Onemonth + "월 1일";
			document.getElementById("seldate").value = "2022-1-1";
			break;
		case 1_2:
			a = Onemonth + "월 2일";
			document.getElementById("seldate").value = "2022-1-2";
			break;
		case 1_3:
			a = Onemonth + "월 3일";
			document.getElementById("seldate").value = "2022-1-3";
			break;
		case 1_4:
			a = Onemonth + "월 4일";
			document.getElementById("seldate").value = "2022-1-4";
			break;
		case 1_5:
			a = Onemonth + "월 5일";
			document.getElementById("seldate").value = "2022-1-5";
			break;
		case 1_6:
			a = Onemonth + "월 6일";
			document.getElementById("seldate").value = "2022-1-6";
			break;
		case 1_7:
			a = Onemonth + "월 7일";
			document.getElementById("seldate").value = "2022-1-7";
			break;
		case 1_8:
			a = Onemonth + "월 8일";
			document.getElementById("seldate").value = "2022-1-8";
			break;
		case 1_9:
			a = Onemonth + "월 9일";
			document.getElementById("seldate").value = "2022-1-9";
			break;
		case 1_10:
			a = Onemonth + "월 10일";
			document.getElementById("seldate").value = "2022-1-10";
			break;
		case 1_11:
			a = Onemonth + "월 11일";
			document.getElementById("seldate").value = "2022-1-11";
			break;
		case 1_12:
			a = Onemonth + "월 12일";
			document.getElementById("seldate").value = "2022-1-12";
			break;
		case 1_13:
			a = Onemonth + "월 13일";
			document.getElementById("seldate").value = "2022-1-13";
			break;
		case 1_14:
			a = Onemonth + "월 14일";
			document.getElementById("seldate").value = "2022-1-14";
			break;
		case 1_15:
			a = Onemonth + "월 15일";
			document.getElementById("seldate").value = "2022-1-15";
			break;
		case 1_16:
			a = Onemonth + "월 16일";
			document.getElementById("seldate").value = "2022-1-16";
			break;
		case 1_17:
			a = Onemonth + "월 17일";
			document.getElementById("seldate").value = "2022-1-17";
			break;
		case 1_18:
			a = Onemonth + "월 18일";
			document.getElementById("seldate").value = "2022-1-18";
			break;
		case 1_19:
			a = Onemonth + "월 19일";
			document.getElementById("seldate").value = "2022-1-19";
			break;
		case 1_20:
			a = Onemonth + "월 20일";
			document.getElementById("seldate").value = "2022-1-20";
			break;
		case 1_21:
			a = Onemonth + "월 21일";
			document.getElementById("seldate").value = "2022-1-21";
			break;
		case 1_22:
			a = Onemonth + "월 22일";
			document.getElementById("seldate").value = "2022-1-22";
			break;
		case 1_23:
			a = Onemonth + "월 23일";
			document.getElementById("seldate").value = "2022-1-23";
			break;
		case 1_24:
			a = Onemonth + "월 24일";
			document.getElementById("seldate").value = "2022-1-24";
			break;
		case 1_25:
			a = Onemonth + "월 25일";
			document.getElementById("seldate").value = "2022-1-25";
			break;
		case 1_26:
			a = Onemonth + "월 26일";
			document.getElementById("seldate").value = "2022-1-26";
			break;
		case 1_27:
			a = Onemonth + "월 27일";
			document.getElementById("seldate").value = "2022-1-27";
			break;
		case 1_28:
			a = Onemonth + "월 28일";
			document.getElementById("seldate").value = "2022-1-28";
			break;
		case 1_29:
			a = Onemonth + "월 29일";
			document.getElementById("seldate").value = "2022-1-29";
			break;
		case 1_30:
			a = Onemonth + "월 30일";
			document.getElementById("seldate").value = "2022-1-30";
			break;
		case 1_31:
			a = Onemonth + "월 31일";
			document.getElementById("seldate").value = "2022-1-31";
			break;

		case 2_1:
			a = Twomonth + "월 1일";
			document.getElementById("seldate").value = "2022-2-1";
			break;
		case 2_2:
			a = Twomonth + "월 2일";
			document.getElementById("seldate").value = "2022-2-2";
			break;
		case 2_3:
			a = Twomonth + "월 3일";
			document.getElementById("seldate").value = "2022-2-3";
			break;
		case 2_4:
			a = Twomonth + "월 4일";
			document.getElementById("seldate").value = "2022-2-4";
			break;
		case 2_5:
			a = Twomonth + "월 5일";
			document.getElementById("seldate").value = "2022-2-5";
			break;
		case 2_6:
			a = Twomonth + "월 6일";
			document.getElementById("seldate").value = "2022-2-6";
			break;
		case 2_7:
			a = Twomonth + "월 7일";
			document.getElementById("seldate").value = "2022-2-7";
			break;
		case 2_8:
			a = Twomonth + "월 8일";
			document.getElementById("seldate").value = "2022-2-8";
			break;
		case 2_9:
			a = Twomonth + "월 9일";
			document.getElementById("seldate").value = "2022-2-9";
			break;
		case 2_10:
			a = Twomonth + "월 10일";
			document.getElementById("seldate").value = "2022-2-10";
			break;
		case 2_11:
			a = Twomonth + "월 11일";
			document.getElementById("seldate").value = "2022-2-11";
			break;
		case 2_12:
			a = Twomonth + "월 12일";
			document.getElementById("seldate").value = "2022-2-12";
			break;
		case 2_13:
			a = Twomonth + "월 13일";
			document.getElementById("seldate").value = "2022-2-13";
			break;
		case 2_14:
			a = Twomonth + "월 14일";
			document.getElementById("seldate").value = "2022-2-14";
			break;
		case 2_15:
			a = Twomonth + "월 15일";
			document.getElementById("seldate").value = "2022-2-15";
			break;
		case 2_16:
			a = Twomonth + "월 16일";
			document.getElementById("seldate").value = "2022-2-16";
			break;
		case 2_17:
			a = Twomonth + "월 17일";
			document.getElementById("seldate").value = "2022-2-17";
			break;
		case 2_18:
			a = Twomonth + "월 18일";
			document.getElementById("seldate").value = "2022-2-18";
			break;
		case 2_19:
			a = Twomonth + "월 19일";
			document.getElementById("seldate").value = "2022-2-19";
			break;
		case 2_20:
			a = Twomonth + "월 20일";
			document.getElementById("seldate").value = "2022-2-20";
			break;
	}

	document.getElementById("TopChoiceDay").innerText = a;
	document.getElementById("BottomChoiceDay").innerText = a;
}
            
// 데이터 로드 함수
 
	// 스피드 스케이팅 데이터
function getSSKData() {
	let date = document.getElementById("seldate").value;	//	"seldate"에서 날짜 get
	let event = "SSK";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;
			data = JSON.parse(data); // data JSON 으로 변환

			if (data.length != 0) {	// 데이터가 있는 경우
				document.getElementById("SSK6").style.display = "none";	// 기사 내용 있을때는 기사 없을때 내용 숨김

				// 가져온 data를 각 태그 안쪽에 입력
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {	// 데이터가 없는 경우
				document.getElementById("SSK6").style.display = ""; // 기사가 없다는 내용 표시

				// 기존에 남아 있는 내용 초기화
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}
		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}

	//	 <!-- 컬링 데이터 -->   
function getCURData() {
	let date = document.getElementById("seldate").value;
	let event = "CUR";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("CUR6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("CUR6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}
		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 알파인 스키 데이터 -->   
function getALPData() {
	let date = document.getElementById("seldate").value;
	let event = "ALP";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("ALP6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("ALP6").style.display = "";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}
		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 스노보드 데이터 -->   
function getSBDData() {
	let date = document.getElementById("seldate").value;
	let event = "SBD";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("SBD6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("SBD6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 스키점프 데이터 -->   
function getSJPData() {
	let date = document.getElementById("seldate").value;
	let event = "SJP";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("SJP6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("SJP6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 루지 데이터 -->   
function getLUGData() {
	let date = document.getElementById("seldate").value;
	let event = "LUG";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("LUG6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("LUG6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 바이애슬론 데이터 -->   
function getBTHData() {
	let date = document.getElementById("seldate").value;
	let event = "BTH";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("BTH6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("BTH6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 아이스하키 데이터 -->   
function getIHOData() {
	let date = document.getElementById("seldate").value;
	let event = "IHO";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("IHO6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("IHO6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 봅슬레이 데이터 -->   
function getBOBData() {
	let date = document.getElementById("seldate").value;
	let event = "BOB";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("BOB6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("BOB6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 크로스컨트리 데이터 -->   
function getCCSData() {
	let date = document.getElementById("seldate").value;
	let event = "CCS";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("CCS6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("CCS6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 쇼트트랙 데이터 -->   
function getSTKData() {
	let date = document.getElementById("seldate").value;
	let event = "STK";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("STK6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("STK6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 피겨스케이팅 데이터 -->   
function getFSKData() {
	let date = document.getElementById("seldate").value;
	let event = "FSK";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("FSK6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("FSK6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 프리스타일 스키 데이터 -->   
function getFRSData() {
	let date = document.getElementById("seldate").value;
	let event = "FRS";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("FRS6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("FRS6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 노르딕 복합 데이터 -->   
function getNCBData() {
	let date = document.getElementById("seldate").value;
	let event = "NCB";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("NCB6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("NCB6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
	
	//	 <!-- 스켈레톤 복합 데이터 -->   
function getSKNData() {
	let date = document.getElementById("seldate").value;
	let event = "SKN";

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if (this.readyState == 4 && this.status == 200) {

			var data = this.responseText;

			data = JSON.parse(data);

			if (data.length != 0) {
				document.getElementById("SKN6").style.display = "none";

				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = (i + 1) + ". " + data[i].token;
				}
			}
			else {
				document.getElementById("SKN6").style.display = "";
				
				for (var i = 0; i < 5; i++) {
					document.getElementById(event + (i + 1)).innerHTML = "";
				}
			}

		}
	}
	xhttp.open("GET", "getcarddata?date=" + date + "&event=" + event, true);
	xhttp.send();
}
