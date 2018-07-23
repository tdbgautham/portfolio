const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Automation",
				weight: 12.3
			}, {
				text: "Css3",
				weight: 8
			}, {
				text: "C#",
				weight: 14
			}, {
				text: "Jquery",
				weight: 3
			}, {
				text: "Programming",
				weight: 7
			}, {
				text: "Angular",
				weight: 10
			}, {
				text: "Javascript",
				weight: 9
			}, {
				text: "Performance",
				weight: 15
			}, {
				text: "Html5",
				weight: 7
			},
            {
				text: "Performance",
				weight: 7
			},{
				text: "RestFul Api",
				weight: 7
			},{
				text: "Micro Service",
				weight: 7
			},{
				text: "Azure",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", "also automate the process.","do performance via jMeter.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
