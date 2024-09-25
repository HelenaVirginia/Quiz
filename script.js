<script>
        // Função para verificar respostas
        function checkAnswers() {
            let correctAnswers = ['HTML', 'google.com', 'Ab23!kao8Anmd#', '1991', 'Javascript, Java', '.html', 'type', 'Java'];
            let answers = [];
            
            // Coletar respostas dos campos de texto
            answers.push(document.getElementById('p8').value);
            
            // Verificar se todas as respostas estão corretas
            let score = 0;
            for (let i = 0; i < correctAnswers.length; i++) {
                if (answers[i] === correctAnswers[i]) {
                    score++;
                }
            }
            
            return score;
        }

        // Função para mostrar o resultado
        function showResult(score) {
            let resultDiv = document.createElement('div');
            resultDiv.innerHTML = `
                <h2>Resultado do Quiz</h2>
                <p>Você acertou ${score} perguntas!</p>
                <p>Clique em "Verificar Resposta" para ver as respostas corretas.</p>
                <button onclick="checkAnswers()">Verificar Resposta</button>
            `;
            document.body.appendChild(resultDiv);
        }

        // Função principal
        function quiz() {
            let form = document.querySelector('form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                let score = checkAnswers();
                showResult(score);
            });
        }

        // Iniciar o quiz quando a página carregar
        window.onload = quiz;
    </script>
