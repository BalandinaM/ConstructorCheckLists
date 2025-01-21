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
		{
			id: "5",
			title: "Прочее важное перед отъездом",
			description: "По мелочи, но ОЧЕНЬ важно",
			tasksData: [
				{
					idTask: "51",
					task: "Проверить аптечку",
					isDone: false,
				},
				{
					idTask: "52",
					task: "Забронировать транспорт до аэропорта",
					isDone: false,
				},
				{
					idTask: "53",
					task: "Зарядка устройств",
					isDone: false,
				},
				{
					idTask: "54",
					task: "Позвонить маме",
					isDone: false,
				},
				{
					idTask: "55",
					task: "Проверить прогноз погоды",
					isDone: false,
				},
			],
		},
		{
			id: "6",
			title: "Прочее важное перед отъездом",
			description: "По мелочи, но ОЧЕНЬ важно",
			tasksData: [
				{
					idTask: "61",
					task: "Проверить аптечку",
					isDone: false,
				},
				{
					idTask: "62",
					task: "Забронировать транспорт до аэропорта",
					isDone: false,
				},
				{
					idTask: "63",
					task: "Зарядка устройств",
					isDone: false,
				},
				{
					idTask: "64",
					task: "Позвонить маме",
					isDone: false,
				},
				{
					idTask: "65",
					task: "Проверить прогноз погоды",
					isDone: false,
				},
			],
		},
		{
			id: "7",
			title: "Прочее важное перед отъездом",
			description: "По мелочи, но ОЧЕНЬ важно",
			tasksData: [
				{
					idTask: "71",
					task: "Проверить аптечку",
					isDone: false,
				},
				{
					idTask: "72",
					task: "Забронировать транспорт до аэропорта",
					isDone: false,
				},
				{
					idTask: "73",
					task: "Зарядка устройств",
					isDone: false,
				},
				{
					idTask: "74",
					task: "Позвонить маме",
					isDone: false,
				},
				{
					idTask: "75",
					task: "Проверить прогноз погоды",
					isDone: false,
				},
			],
		},
		{
			id: "8",
			title: "Прочее важное перед отъездом",
			description: "По мелочи, но ОЧЕНЬ важно",
			tasksData: [
				{
					idTask: "81",
					task: "Проверить аптечку",
					isDone: false,
				},
				{
					idTask: "82",
					task: "Забронировать транспорт до аэропорта",
					isDone: false,
				},
				{
					idTask: "83",
					task: "Зарядка устройств",
					isDone: false,
				},
				{
					idTask: "84",
					task: "Позвонить маме",
					isDone: false,
				},
				{
					idTask: "85",
					task: "Проверить прогноз погоды",
					isDone: false,
				},
			],
		},
		{
			id: "9",
			title: "Прочее важное перед отъездом",
			description: "По мелочи, но ОЧЕНЬ важно",
			tasksData: [
				{
					idTask: "91",
					task: "Проверить аптечку",
					isDone: false,
				},
				{
					idTask: "92",
					task: "Забронировать транспорт до аэропорта",
					isDone: false,
				},
				{
					idTask: "93",
					task: "Зарядка устройств",
					isDone: false,
				},
				{
					idTask: "94",
					task: "Позвонить маме",
					isDone: false,
				},
				{
					idTask: "95",
					task: "Проверить прогноз погоды",
					isDone: false,
				},
			],
		},
		{
			id: "10",
			title: "Прочее важное перед отъездом",
			description: "По мелочи, но ОЧЕНЬ важно",
			tasksData: [
				{
					idTask: "101",
					task: "Проверить аптечку",
					isDone: false,
				},
				{
					idTask: "102",
					task: "Забронировать транспорт до аэропорта",
					isDone: false,
				},
				{
					idTask: "103",
					task: "Зарядка устройств",
					isDone: false,
				},
				{
					idTask: "104",
					task: "Позвонить маме",
					isDone: false,
				},
				{
					idTask: "105",
					task: "Проверить прогноз погоды",
					isDone: false,
				},
			],
		},
		{
			id: "11",
			title: "Прочее важное перед отъездом",
			description: "По мелочи, но ОЧЕНЬ важно",
			tasksData: [
				{
					idTask: "111",
					task: "Проверить аптечку",
					isDone: false,
				},
				{
					idTask: "112",
					task: "Забронировать транспорт до аэропорта",
					isDone: false,
				},
				{
					idTask: "113",
					task: "Зарядка устройств",
					isDone: false,
				},
				{
					idTask: "114",
					task: "Позвонить маме",
					isDone: false,
				},
				{
					idTask: "115",
					task: "Проверить прогноз погоды",
					isDone: false,
				},
			],
		},
		{
			id: "12",
			title: "Прочее важное перед отъездом",
			description: "По мелочи, но ОЧЕНЬ важно",
			tasksData: [
				{
					idTask: "121",
					task: "Проверить аптечку",
					isDone: false,
				},
				{
					idTask: "122",
					task: "Забронировать транспорт до аэропорта",
					isDone: false,
				},
				{
					idTask: "123",
					task: "Зарядка устройств",
					isDone: false,
				},
				{
					idTask: "124",
					task: "Позвонить маме",
					isDone: false,
				},
				{
					idTask: "125",
					task: "Проверить прогноз погоды",
					isDone: false,
				},
			],
		},
		{
			id: "13",
			title: "Прочее важное перед отъездом",
			description: "По мелочи, но ОЧЕНЬ важно",
			tasksData: [
				{
					idTask: "131",
					task: "Проверить аптечку",
					isDone: false,
				},
				{
					idTask: "132",
					task: "Забронировать транспорт до аэропорта",
					isDone: false,
				},
				{
					idTask: "133",
					task: "Зарядка устройств",
					isDone: false,
				},
				{
					idTask: "134",
					task: "Позвонить маме",
					isDone: false,
				},
				{
					idTask: "135",
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
