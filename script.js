/**
 * 多層パーセプトロン（MLP）のコアロジック
 */
const MLP = {
    sigmoid: (x) => 1 / (1 + Math.exp(-x)),
    weights: {
        hidden: [[-20, 20], [-20, 20]],
        hiddenBias: [30, -10],
        output: [20, 20],
        outputBias: -30,
    },
    predict: function(input1, input2) {
        const hiddenLayerInput1 = input1 * this.weights.hidden[0][0] + input2 * this.weights.hidden[1][0] + this.weights.hiddenBias[0];
        const hiddenLayerOutput1 = this.sigmoid(hiddenLayerInput1);
        const hiddenLayerInput2 = input1 * this.weights.hidden[0][1] + input2 * this.weights.hidden[1][1] + this.weights.hiddenBias[1];
        const hiddenLayerOutput2 = this.sigmoid(hiddenLayerInput2);
        const outputLayerInput = hiddenLayerOutput1 * this.weights.output[0] + hiddenLayerOutput2 * this.weights.output[1] + this.weights.outputBias;
        const output = this.sigmoid(outputLayerInput);
        return output;
    }
};

/**
 * ページ読み込み時に真理値表を生成する
 */
window.addEventListener('load', () => {
    const tableBody = document.getElementById('truth-table-body');
    const totalPatterns = 16; // 2の4乗

    // 0000から1111までの16パターンをループ
    for (let i = 0; i < totalPatterns; i++) {
        // iを4ビットのバイナリに変換
        const a = (i >> 3) & 1;
        const b = (i >> 2) & 1;
        const c = (i >> 1) & 1;
        const d = i & 1;

        // 4入力XORをMLPで計算
        let xorResult = MLP.predict(a, b);
        xorResult = MLP.predict(xorResult, c);
        xorResult = MLP.predict(xorResult, d);

        const finalXOR = Math.round(xorResult);
        const finalXNOR = 1 - finalXOR;

        // テーブルの行を作成
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${a}</td>
            <td>${b}</td>
            <td>${c}</td>
            <td>${d}</td>
            <td><span class="output-val xor-val">${finalXOR}</span></td>
            <td><span class="output-val xnor-val">${finalXNOR}</span></td>
        `;

        // テーブルに作成した行を追加
        tableBody.appendChild(row);
    }
});
