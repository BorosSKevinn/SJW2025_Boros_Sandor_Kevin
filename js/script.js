'use strict';

const fruits = [
    { name: 'Banán', calories: 89, fat: 0.33, carbs: 22.8, protein: 1.09, fiber: 2.6 },
    { name: 'Alma', calories: 52, fat: 0.17, carbs: 13.8, protein: 0.26, fiber: 1.3 },
    { name: 'Narancs', calories: 47, fat: 0.12, carbs: 11.8, protein: 0.94, fiber: 2.0 }
];

const fruitSelect = document.getElementById('gyumolcs');
const quantityInput = document.getElementById('mennyiseg');
const calculateButton = document.getElementById('szamitas');
const resetButton = document.getElementById('reset');
const errorMessage = document.getElementById('error-message');
const resultElements = {
    calories: document.getElementById('calories'),
    fat: document.getElementById('fat'),
    carbs: document.getElementById('carbs'),
    protein: document.getElementById('protein'),
    fiber: document.getElementById('fiber')
};

function loadFruits() {
    fruitSelect.innerHTML = '<option value="">Válasszon egy gyümölcsöt!</option>';
    fruits.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit.name;
        option.textContent = fruit.name;
        fruitSelect.appendChild(option);
    });
}

function calculate() {
    const selectedFruit = fruitSelect.value;
    const quantity = parseFloat(quantityInput.value);

    if (!selectedFruit) {
        errorMessage.textContent = 'Válasszon egy gyümölcsöt a lenyíló listából!';
        errorMessage.classList.remove('hidden');
        return;
    }
    errorMessage.classList.add('hidden');

    const fruitData = fruits.find(fruit => fruit.name === selectedFruit);
    if (!fruitData) return;

    resultElements.calories.textContent = (fruitData.calories * quantity).toFixed(1) + ' kcal';
    resultElements.fat.textContent = (fruitData.fat * quantity).toFixed(1) + ' g';
    resultElements.carbs.textContent = (fruitData.carbs * quantity).toFixed(1) + ' g';
    resultElements.protein.textContent = (fruitData.protein * quantity).toFixed(1) + ' g';
    resultElements.fiber.textContent = (fruitData.fiber * quantity).toFixed(1) + ' g';
}

function resetForm() {
    fruitSelect.selectedIndex = 0;
    quantityInput.value = 1;
    errorMessage.classList.add('hidden');
    
    for (const key in resultElements) {
        resultElements[key].textContent = '';
    }
}

calculateButton.addEventListener('click', calculate);
resetButton.addEventListener('click', resetForm);
fruitSelect.addEventListener('change', () => errorMessage.classList.add('hidden'));

loadFruits();
