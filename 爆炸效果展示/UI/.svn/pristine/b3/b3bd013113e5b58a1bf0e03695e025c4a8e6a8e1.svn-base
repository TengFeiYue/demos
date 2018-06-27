function DomStr(fn) { // 用来字符串转义
	return fn.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '').trim().replace(/>\s*</g, '><');
}

var footerStr = DomStr(function() {
	/*
        <div class="antsooLogo">
			<div class="logo">
				<div class="img">
					<img src="shareHotImg/logo_05.png"/>
				</div>
				<div class="title">让材料人生意变简单</div>
			</div>
			<div class="down">
				<a href="http://www.antsoo.com/appdownload.shtml">
					<img src="shareHotImg/newAppdownload.png"/>
				</a>
			</div>
		</div>
     */
});

Vue.component('footer-download', {
	template: footerStr
})