module.exports = {
    startOption  :{
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Не могу запомнить надолго', callback_data: '/nextMessage'}],
                [{text:'Учиться скучно', callback_data: '/nextMessage'}],
                [{text:'Часто отвлекаюсь', callback_data: '/nextMessage'}],
                [{text:'Не могу начать учиться', callback_data: '/nextMessage'}],
                [{text:'Выгораю из-за учебы', callback_data: '/nextMessage'}],
                [{text:'Хочу легче сдавать экзамены', callback_data: '/nextMessage'}],
                [{text:'Хочу лучше учить других', callback_data: '/nextMessage'}],
                [{text:'Хочу знать больше об учебе', callback_data: '/nextMessage'}],
                [{text:'Свой вариант', callback_data: '/nextMessage'}],
            ]
        })
    },
      msg2Option : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Начать учиться💥 ', callback_data: '/payMethod'}],
                [{text:'Расскажи о себе', callback_data: '/infoBot'}],
                [{text:'Расскажи об алгоритме', callback_data: '/Algorithm'}],
                [{text:'Задать свой вопрос', callback_data: '/Question'}],

            ]
        })
    },
      questionOptions : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Вернуться к вопросам', callback_data: '/nextMessage1'}]
            ]
        })
    },
      algorithmOptions : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Посмотреть бы на алгоритм', callback_data: '/Algorithm2'}],
                [{text:'Вернуться к вопросам', callback_data: '/nextMessage1'}],
            ]
        })
    },
      algorithm2Options :{
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Начать учиться💥 ', callback_data: '/payMethod'}],
                [{text:'Какой порядок работы?', callback_data: '/operatingProcedure'}],
                [{text:'Вернуться к вопросам', callback_data: '/nextMessage1'}],
            ]
        })
    },
      operatingProcedureOptions :{
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Начать учиться💥 ', callback_data: '/payMethod'}],
                [{text:'Для кого он полезен?', callback_data: '/utilityBot'}],
                [{text:'Вернуться к вопросам', callback_data: '/nextMessage1'}],
            ]
        })
    },
      utilityBotOptions :{
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Да, угадал🤭 давай дальше', callback_data: '/notHealthy'}],
                [{text:'Вернуться к вопросам', callback_data: '/nextMessage1'}],
            ]
        })
    },
     notHealthyOptions : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Начать учиться💥 ', callback_data: '/payMethod'}],
                    [{text:'Вернуться к вопросам', callback_data: '/nextMessage1'}],
                ]
            }
        )
    },
     rulesToMonitor : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Перейти к оплате', callback_data: '/payMethodMsg2'}],
                    [{text:'Вернуться к вопросам', callback_data: '/nextMessage1'}],
                ]
            }
        )
    },
      infoBotOptions : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Узнать что в итоге)', callback_data: '/infoBotMsg2'}],

                ]
            }
        )

    },
      infoBotMsg2Options :{
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Начать учиться💥 ', callback_data: '/payMethod'}],
                    [{text:'А есть отзывы?', callback_data: '/reviewsBot'}],
                    [{text:'А если мне не подойдет?', callback_data: '/refund'}],
                    [{text:'Вернуться к вопросам', callback_data: '/nextMessage1'}]
                ]
            }
        )
    },
      reviewsBotOptions : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Давай еще несколько', callback_data: '/reviewsBotMsg2'}],
                    [{text:'Вернуться к вопросам', callback_data: '/nextMessage1'}]
                ]
            }
        )
    },
     whenPayingForTheBotOptions : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Изучить предмет/навык', callback_data: '/learnSkill'}],
                    [{text:'Повторение', callback_data: '/lookAtWork3'}],
                    [{text:'Полезная теория', callback_data: '/usefulTheory'}],
                    [{text:'Для преподавателей', callback_data: '/ForTeachers'}],
                    [{text:'Что-то пошло не так?', callback_data: '/Question'}],
                ]
            }
        )
    },
      learnSkillOptions :{
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'К первому этапу 👊', callback_data: '/firstStep-LearnSkill'}],
                    [{text:'Сразу к "Подготовке🧠', callback_data: '/LearnSkill-Preparation'}],
                    [{text:'Вернуться к меню', callback_data: '/whenPayingForTheBot'}],
                ]
            }
        )
    },
     firstStepLearnSkillOptions :{
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Да', callback_data: '/firstStep-LearnSkill'}],
                    [{text:'Нет', callback_data: '/LearnSkill-Preparation'}],
                    [{text:'Есть, но не точное', callback_data: '/whenPayingForTheBot'}],
                    [{text:'Вернуться к меню', callback_data: '/whenPayingForTheBot'}],
                ]
            }
        )
    },
     rootButton : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Да', callback_data: '/whenPayingForTheBot'}],

                ]
            }
        )
    },
      secondStepLearnSkillYes2Options : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Сделано😌', callback_data: '/secondStep-LearnSkill-Yes2-To_do'}],
                    [{text:'Хочу изменить смысл', callback_data: '/secondStep-LearnSkill-Yes'}],
                ]
            }
        )
    },
    secondStepLearnSkillPreparationOptions : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Схема в голове готова🧠', callback_data: '/secondStepLearnSkillPreparation2'}],
                ]
            }
        )
    },
    secondStepLearnSkillPreparation3 : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Календарь готов👍', callback_data: '/secondStepLearnSkillPreparation5'}],
                    [{text:'К обучению', callback_data: '/secondStepLearnSkillPreparation2'}],
                ]
            }
        )
    },
    secondStepLearnSkillPreparation5 : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Продолжить', callback_data: '/secondStepLearnSkillPreparation6'}],
                    [{text:'Об убеждениях', callback_data: '/secondStepLearnSkillPreparation2'}],
                    [{text:'Про прогресс и откаты', callback_data: '/secondStepLearnSkillPreparation2'}],

                ]
            }
        )
    },
    rutButton : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Продолжить', callback_data: '/whenPayingForTheBot'}],

                ]
            }
        )
    },
    payMethodOptions : {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'Перейти к оплате', callback_data: '/payMethodMsg2'}],
                    [{text:'Вернуться к вопросам', callback_data: '/nextMessage1'}]
                ]
            }
        )
    }

}