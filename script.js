// script.js
window.onload = function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    // 3秒後にウェルカムメッセージを非表示にする
    setTimeout(() => {
        welcomeMessage.style.opacity = '0'; // 不透明度を0に設定
        // 遅延してからメッセージを削除
        setTimeout(() => {
            welcomeMessage.style.display = 'none'; // メッセージを非表示にする
        }, 1000); // CSSの遷移と合わせて1秒後に実行
    }, 3000); // 3秒後に実行
};
