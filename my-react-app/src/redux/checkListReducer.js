import { createSlice} from "@reduxjs/toolkit";

const initialState = {
	checkListsData: [
		{
			id: "1",
			title: "Подготовка документов",
			description: "Какие документы необходимо подготовить или проверить наличие, перед поездкой",
			tasksData: [
				{
					idTask: "11",
					task: "Собрать паспорта",
					isDone: false,
				},
				{
					idTask: "12",
					task: "Взять билеты",
					isDone: false,
				},
				{
					idTask: "13",
					task: "Забронировать отель",
					isDone: false,
				},
				{
					idTask: "14",
					task: "Взять наличку, банковские карты",
					isDone: false,
				},
			],
		},
		{
			id: "2",
			title: "Сбор багажа",
			description: "Что положить в чемоданы",
			tasksData: [
				{
					idTask: "21",
					task: "Упаковать чемоданы",
					isDone: false,
				},
				{
					idTask: "22",
					task: "Купальники",
					isDone: false,
				},
				{
					idTask: "23",
					task: "Солнцезащитные очки",
					isDone: false,
				},
				{
					idTask: "24",
					task: "Головные уборы",
					isDone: false,
				},
				{
					idTask: "25",
					task: "Пляжная обувь",
					isDone: false,
				},
			],
		},
		{
			id: "3",
			title: "Выход из дома",
			description: "Что необходимо проверить непосредственно перед выходом из дома на такси",
			tasksData: [
				{
					idTask: "31",
					task: "Выключить все электроприборы",
					isDone: false,
				},
				{
					idTask: "32",
					task: "Закрыть окна и двери",
					isDone: false,
				},
				{
					idTask: "33",
					task: "Поставить сигнализацию",
					isDone: false,
				},
				{
					idTask: "34",
					task: "Выключить газ",
					isDone: false,
				},
			],
		},
		{
			id: "4",
			title: "Прочее важное перед отъездом",
			description: "По мелочи, но ОЧЕНЬ важно",
			tasksData: [
				{
					idTask: "41",
					task: "Проверить аптечку",
					isDone: false,
				},
				{
					idTask: "42",
					task: "Забронировать транспорт до аэропорта",
					isDone: false,
				},
				{
					idTask: "43",
					task: "Зарядка устройств",
					isDone: false,
				},
				{
					idTask: "44",
					task: "Позвонить маме",
					isDone: false,
				},
				{
					idTask: "45",
					task: "Проверить прогноз погоды",
					isDone: false,
				},
			],
		},
	],
};

export const checkListReducer = createSlice({
	name: 'checklist',
	initialState,
})

//export const {setUserData, exitProfile} = authReducer.actions;
export default checkListReducer.reducer;
