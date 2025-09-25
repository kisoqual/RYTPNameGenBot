import telebot
# import ctypes
# import os

# ctypes.windll.kernel32.SetConsoleTitleA(b"RYTP NameGen TG-Bot")

TOKEN = "7989400840:AAG3XT1TVobCLQ_6IvpHVRs2XEGazpJ-Rvc"
bot = telebot.TeleBot(TOKEN)

# os.system('cls')
print("бот включён!1!!\n")

@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
	bot.reply_to(message, "какой RYTP ты хочеш?")

@bot.message_handler(func=lambda message: True)
def echo_all(message):
	bot.reply_to(message, f"\#ники@futurepooqs \#название@futurepooqs\n{message.text} RYTP", parse_mode='MarkdownV2')
	# print(f"User: {message.text}")
	# print(f"#ники@futurepooqs #название@futurepooqs\n{message.text} RYTP\n")
	# bot.send_photo(message.photo)

bot.infinity_polling()
