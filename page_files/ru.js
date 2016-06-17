define("translations",["require"],function(define){return define.amd=!0,function(a){"function"==typeof define&&define.amd?define(["moment"],a):"object"==typeof exports?module.exports=a(require("../moment")):a(window.moment)}(function(a){function b(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function c(a,c,d){var e={mm:c?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===d?c?"минута":"минуту":a+" "+b(e[d],+a)}function d(a,b){var c={nominative:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),accusative:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function e(a,b){var c={nominative:"янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),accusative:"янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function f(a,b){var c={nominative:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),accusative:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")},d=/\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/.test(b)?"accusative":"nominative";return c[d][a.day()]}return a.defineLocale("ru",{months:d,monthsShort:e,weekdays:f,weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[й|я]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i],longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(){return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT"},lastWeek:function(){switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:c,mm:c,h:"час",hh:c,d:"день",dd:c,M:"месяц",MM:c,y:"год",yy:c},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(a){return/^(дня|вечера)$/.test(a)},meridiem:function(a,b,c){return 4>a?"ночи":12>a?"утра":17>a?"дня":"вечера"},ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":return a+"-й";case"D":return a+"-го";case"w":case"W":return a+"-я";default:return a}},week:{dow:1,doy:7}})}),{"Please enter your name.":"Пожалуйста, введите своё имя.","Please enter your email address.":"Пожалуйста, введите адрес своей электронной почты","Invalid email address.":"Неправильный адрес электронной почты.","Please enter a password.":"Пожалуйста, введите пароль.","Password must have at least 6 characters.":"Пароль должен содержать не менее 6 символов.","Name must have at least %(minLength)s characters.":"Имя должно быть не менее %(minLength)s букв.","Name must have less than %(maxLength)s characters.":"Имя должно быть меньше %(maxLength)s букв.","Location must have less than %(maxLength)s characters.":"Местоположение должно быть меньше %(maxLength)s букв.","Site must have less than %(maxLength)s characters.":"Сайт должен быть менее %(maxLength)s букв.","Please enter a valid site.":"Пожалуйста укажите действующий сайт.","Comments can't be blank.":"Комментарий не может быть пустым.","Comments must have at least 2 characters.":"Комментарии должны содержать не менее 2 символов.","Please sign in or enter a name and email address.":"Пожалуйста, войдите или введите имя и адрес электронной почты.","Please enter both a name and email address.":"Пожалуйста, введите имя и адрес электронной почты.","Invalid email address format.":"Неверный формат электронной почты.","Description must have at least %(minLength)s characters.":"Описание должно быть не менее %(minLength)s символов.","Description must have less than %(maxLength)s characters.":"Описание должно быть менее %(maxLength)s символов.",Gray:"Серый",Blue:"Синий",Green:"Зелёный",Yellow:"Жёлтый",Orange:"Оранжевый",Red:"Красный",Purple:"Фиолетовый","Edit profile":"Изменить профиль",Private:"Личное",Following:"Читаю",Follow:"Читать",Avatar:"Аватар","1 comment":"1 комментарий","%(numPosts)s comments":"%(numPosts)s комментариев","Also on %(forumName)s":"Также на %(forumName)s","%(guestCount)s Guest Votes":"%(guestCount)s голосов от Гостей","1 Guest Vote":"1 голос от Гостя","%(guestCount)s Others":"%(guestCount)s других","1 Other":"1 другой",Channels:"Каналы","Places to start your own discussions.":"Места, чтоб начать собственные обсуждения.",Dismiss:"Отменить","Upload Images":"Загрузить изображения",Attach:"Прикрепить","Media attachment":"Медиа вложение","Media preview placeholder":"Место для медиафайла","Sorry we didn't catch that. Try again?":"Извините, мы не поняли. Повторить?","Did you know you can drag and drop images too? Try it now!":"Вы знали, что можно перетаскивать изображения? Попробуйте прямо сейчас!","Unfortunately your image upload failed. Please verify that your image is in a supported format (JPEG, PNG, or GIF). If you continue seeing this error, please try again later.":"К сожалению, загрузка вашего изображения не удалась. Пожалуйста, проверьте, что изображение имеет поддерживаемый формат (JPEG, PNG или GIF). Если ошибка повторяется, пожалуйста, повторите попытку позже.","Unfortunately your image upload failed. Please verify that your image is under 2MB. If you continue seeing this error, please try again later.":"К сожалению загрузка вашего изображения не удалась. Проверьте, пожалуйста, что ваше изображение менее 2 Мбайт. Если Вы продолжаете видеть эту ошибку, пожалуйста повторите позже.","Join the discussion…":"Присоединиться к обсуждению...","Start the discussion…":"Начать обсуждение...","Please wait until your images finish uploading.":"Пожалуйста подождите пока ваши изображения загрузятся.","Oops! We're having trouble posting your comment. Check your internet connection and try again.":"Ой! У нас проблемы с отправкой вашего комментария. Проверьте соединение с интернет и попробуйте ещё раз.","That email address is already registered with a Disqus account. Log in or enter another email.":"Этот адрес электронной почты уже зарегистрирован в Disqus. Войдите или введите другой адрес электронной почты.","The e-mail address you specified is already in use.":"Адрес электронной почты указанный вами уже используется.","Try logging in.":"Попробуйте войти.",Thumbnail:"Миниатюра",Play:"Играть",Hide:"Скрыть",View:"Показать","One other person is typing…":"Один человек набирает текст...","%(num)s other people are typing…":"%(num)s человек набирают текст…","Featured by %(forum)s":"Отмечен особым для %(forum)s","Sponsored on Disqus":"Спонсировано на Disqus","Hold on, this is waiting to be approved by %(forum)s.":"Погодите, это ожидает утверждения %(forum)s.","Are you sure you want to flag this comment?":"Вы действительно хотите пометить этот комментарий?","Are you sure you want to delete this comment? You cannot undo this action.":"Вы действительно хотите удалить этот комментарий? Вы не сможете отменить это действие.","This discussion has been closed.":"Обсуждение было закрыто.","Be the first to comment.":"Прокомментируйте первым.","Nothing in this discussion yet.":"В этом обсуждении еще ничего нет.","You must sign in to down-vote this post.":"Вы должны авторизироваться прежде чем голосовать против этого сообщения.","You must sign in to up-vote this post.":"Чтобы голосовать за запись, выполните вход.","Ban User":"Блокировать пользователя","Apply to last 30 days of comments":"Применить к комментариям за последние 30 дней",Note:"Примечание",Save:"Сохранить",Cancel:"Отменить",User:"Пользователь",Email:"Электронная почта","IP Address":"IP адрес","We are unable to post your comment because you have been blocked by %(blocker)s.":"Мы не можем опубликовать ваш комментарий, потому что Вы были заблокированы %(blocker)s.","Find out more.":"Узнать больше.","Save Edit":"Сохранить изменения","%(forumName)s requires you to verify your email address before posting.":"%(forumName)s требует, чтобы вы подтвердили адрес своей электронной почты перед публикацией.","Verify Email":"Подтвердить адрес электронной почты","Send verification email to %(email)s":"Отправить письмо с проверкой на %(email)s","Drag and drop your images here to upload them.":"Перетащите сюда изображения, чтобы загрузить их.","Post as %(name)s":"Опубликовать от имени %(name)s","Log in with":"Войти с помощью","or sign up with Disqus":"или через Disqus","or pick a name":"или выберите имя","Disqus is a discussion network":"Disqus — сеть для общения","Disqus never moderates or censors. The rules on this community are its own.":"Disqus никогда не модерирует. Правила этого сообщества регулируются им самим.","Your email is safe with us. It's only used for moderation and optional notifications.":"Адрес вашей электронной почты в безопасности у нас. Он будет использоваться только для модерации и некоторых уведомлений.","Don't be a jerk or do anything illegal. Everything is easier that way.":"Не делайте глупостей и ничего незаконного. Так всем будет лучше .","Read full terms and conditions":"Прочесть полное пользовательское соглашение",Name:"Имя",Password:"Пароль","Privacy Policy":"Политика конфиденциальности","Terms of Service":"Условия использования","Basic Rules":"Основные правила","By signing up, you agree to the %(Disqus)s %(basicRules)s, %(serviceTerms)s, and %(privacyPolicy)s.":"Зарегистрировавшись, вы соглашаетесь с %(Disqus)s %(basicRules)s, %(serviceTerms)s, и %(privacyPolicy)s.","By posting, you agree to the %(Disqus)s %(basicRules)s, %(serviceTerms)s, and %(privacyPolicy)s.":"Публикуя, вы соглашаетесь с %(Disqus)s %(basicRules)s, %(serviceTerms)s, и %(privacyPolicy)s.","I'd rather post as a guest":"Хотел бы написать как гость",Post:"Опубликовать",Next:"Дальше","Connect with %(forumName)s":"Связаться с %(forumName)s","%(forumName)s needs permission to access your account.":"%(forumName)s необходимо разрешение на доступ к вашей учетной записи.","Featured Comment":"Особый комментарий",MOD:"МОДЕРАТОР","1 vote":"1 голос","%(numLikesReceived)s votes":"%(numLikesReceived)s голосов","Full profile":"Полный профиль","Load more comments":"Загрузить ещё комментарии","Powered by Disqus":"Работает на Disqus","Subscribe and get email updates from this discussion":"Подпишись и получай обновления этого обсуждения по электронной почте",Subscribe:"Подписаться","yourname@email.com":"yourname@email.com","Add Disqus to your site":"Добавь Disqus на свой сайт","Add Disqus":"Добавить Disqus",Add:"Добавить",Privacy:"Конфиденциальность",Best:"Лучшие",Newest:"Новые",Oldest:"Старые","Sort by Best":"Лучшее в начале","Sort by Newest":"Новое в начале","Sort by Oldest":"Старое в начале",Comments:"Комментарии",Community:"Сообщество","Recommend this discussion":"Рекомендовать это обсуждение",Recommend:"Рекомендовать",Recommended:"Рекомендовано","Your 1st recommended discussion!":"Ваше первое рекомендованное обсуждение!","Recommending means this is a discussion worth sharing. It gets shared to your followers' %(Disqus)s feeds if you log in, and gives the creator kudos!":"Рекомендация означает, что обсуждение стоит того, чтобы им поделиться. Вы поделитесь им со своими подписчиками в лентах %(Disqus)s и добавите славы её создателю.","Discussion Recommended!":"Обсуждение рекомендовано!","Recommending means this is a discussion worth sharing. It gets shared to your followers' %(Disqus)s feeds, and gives the creator kudos!":"Рекомендация означает, что обсуждение стоит того, чтобы им поделиться. Вы поделитесь им со своими подписчиками в лентах %(Disqus)s и добавите славы её создателю.","See Your Feed":"Посмотреть свою ленту","Find More Discussions":"Найти больше обсуждений",Share:"Поделиться","Share this discussion on":"Поделиться обсуждением в ","Welcome to %(Disqus)s! Discover more great discussions just like this one. We're a lot more than comments.":"Добро пожаловать в %(Disqus)s! Находите больше отличных обсуждений как это. Мы гораздо больше чем просто комментарии.","Get Started":"Начать","see more":"показать больше","All-Star":"Только избранное",Mod:"Модератор","This comment has no content.":"Этот комментарий пустой.","Vote down":"Голосовать ПРОТИВ","Vote up":"Голосовать ЗА",Collapse:"Свернуть",Expand:"Развернуть","Mark as Spam":"Пометить как спам",Delete:"Удалить",Moderate:"Модерировать","Stop featuring":"Больше не особенный","Feature this comment":"Отметить комментарий как особый","Flag as inappropriate":"Пометить как неуместное",Edit:"Изменить",Reply:"Ответить","View all comments":"Показать все комментарии","All Comments":"Все комментарии",Link:"Ссылка","Leave Feedback":"Оставить отзыв","You've featured a comment! This comment will now also appear at the top of the discussion.":"Вы отметили комментарий как особый! Теперь этот комментарий появится также вверху дискуссии.","This comment was deleted.":"Комментарий был удален.","This comment is awaiting moderation.":"Этот комментарий ожидает проверки.","Comment score below threshold.":"Рейтинг комментария ниже допустимого.","Show comment.":"Показать комментарий.","Your comment is awaiting moderation.":"Ваш комментарий ожидает проверки.","See your comment.":"Просмотреть свой комментарий.","Why?":"Почему?","Show One New Comment":"Показать новый комментарий","Show %(comments)s New Comments":"Показать %(comments)s новых комментариев","Show 1 new reply":"Показать 1 новый комментарий","Show %(replies)s new replies":"Показать %(replies)s новых ответов","One new comment above.":"Один новый комментарий выше.","%(num)s new comments above.":"%(num)s новых комментариев выше.","One new comment below.":"1 новый комментарий ниже.","%(num)s new comments below.":"%(num)s новых комментариев ниже.","in this conversation":"в этой беседе","%(numLikes)s starred this":"%(numLikes)s отметили это",Login:"Войти","Your Profile":"Мой профиль","Display Media":"Показать медиа","Hide Media":"Скрыть медиа","Edit Settings":"Изменить настройки","Open Thread":"Открыть диалог","Close Thread":"Закрыть диалог",Help:"Помощь",Debug:"Отладка",Repair:"Восстановить",Logout:"Выйти","The Disqus comment system is temporarily in maintenance mode. You can still read comments during this time, however posting comments and other actions are temporarily delayed.":"Система комментариев Disqus временно переключёна в режим обслуживания. Вы можете продолжать читать комментарии, однако добавление комментариев и другие действия временно не доступны.","Comments for this thread are now closed.":"Комментарии к этой записи в настоящее время закрыты.","An error occurred while opening the thread. Please try again.":"Произошла ошибка при открытии ветки. Попробуйте снова.","An error occurred while closing the thread. Please try again.":"Произошла ошибка при закрытии ветки. Попробуйте снова.","Are you sure you want to block this user?":"Вы уверены, что хотите заблокировать этого пользователя?","Block User":"Блокировать пользователя","This user is blocked.":"Этот пользователь заблокирован."}});