document.getElementById('dietForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const resultDiv = document.getElementById('dietResult');
  resultDiv.innerHTML = "⏳ Анализируем ваш рацион...";

  const text = document.getElementById('dietText').value.trim();
  const imageInput = document.getElementById('dietImage');
  const imageFile = imageInput.files[0];

  // Проверка: текст или фото
  if (!text && !imageFile) {
    resultDiv.innerHTML = '<span style="color: #e53935;">Пожалуйста, введите рацион или загрузите фото.</span>';
    return;
  }

  // Пока нет своего backend и безопасного API-ключа — выводим демо-ответ:
  if (text) {
    // Демонстрационный ответ
    resultDiv.innerHTML = `
      <b>Пример анализа рациона:</b><br>
      - Калорийность: ~1650 ккал<br>
      - Белки: ~90 г, Жиры: ~50 г, Углеводы: ~220 г<br>
      <span style="color:#bfa800">Рекомендация:</span> Чуть увеличить белки на ужин, добавить листовые овощи, снизить сладкое.<br>
      <br>
      <span style="font-size:0.93em; color:#888">В будущем здесь появится детальный анализ с помощью AI по вашему тексту</span>
    `;
    return;
  }
  if (imageFile) {
    // Демонстрационный ответ для фото
    resultDiv.innerHTML = `
      <b>Фото получено.</b><br>
      <span style="color:#bfa800;">Экспериментальная функция!<br>
      Детальный AI-анализ по фото появится в ближайших версиях.</span>
      <br>
      <span style="font-size:0.93em; color:#888">Пока что рекомендуем пользоваться текстовым описанием рациона.</span>
    `;
    return;
  }
});
