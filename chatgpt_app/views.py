from django.shortcuts import render
from django.http import JsonResponse
import openai

openai.api_key = "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"

def chat_view(request):
    if request.method == 'POST':
        user_input = request.POST['user_input']

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Car Teller"},
                {"role": "system", "content": "Only answer question about cars"},
                {"role": "system", "content": "If is something non car related, to give answer that I'm only give answers about cars"},
                {"role": "user", "content": user_input},
            ],
            temperature=0.5,
            max_tokens=3035,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0,
            n=1,
            stop=["\nUser:"],
        )

        bot_response = response["choices"][0]["message"]["content"]
        return JsonResponse({'response': bot_response})

    return render(request, 'chatgpt_app/chat.html')
