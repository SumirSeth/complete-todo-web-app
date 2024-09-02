export const useGreeting = () => {
  function getTimeZone() {
      const currentHour = new Date().getHours();
      
      if (currentHour >= 5 && currentHour < 12) {
          return "morning";
      } else if (currentHour >= 12 && currentHour < 16) {
          return "afternoon";
      } else if (currentHour >= 16 && currentHour < 20) {
          return "evening";
      } else {
          return "night";
      }
  }

  const greeting = (username:string) =>{

      const key = Math.floor(Math.random() * 51)
      
      const morningMessage = (username:string, key:number) => {
          const morningMessages = [
              `Good Morning, ${username}. Hope you have a fantastic day ahead.`,
              `Good Morning, ${username}. May your day be filled with joy and success.`,
              `Good Morning, ${username}. Wishing you a day full of sunshine and smiles.`,
              `Good Morning, ${username}. May your day be as bright as your smile.`,
              `Good Morning, ${username}. Here’s to a productive and fulfilling day.`,
              `Good Morning, ${username}. Sending positive vibes your way.`,
              `Good Morning, ${username}. Have an amazing day filled with great moments.`,
              `Good Morning, ${username}. Wishing you happiness and prosperity today.`,
              `Good Morning, ${username}. May your day be blessed with good fortune.`,
              `Good Morning, ${username}. Hope your day is as wonderful as you are.`,
              `Good Morning, ${username}. Here’s to a day full of new opportunities.`,
              `Good Morning, ${username}. Wishing you a delightful and successful day.`,
              `Good Morning, ${username}. May your day be filled with achievements and happiness.`,
              `Good Morning, ${username}. Have a day that is as lovely as you.`,
              `Good Morning, ${username}. Wishing you peace and joy throughout the day.`,
              `Good Morning, ${username}. Hope today brings you closer to your dreams.`,
              `Good Morning, ${username}. Wishing you a day full of love and laughter.`,
              `Good Morning, ${username}. May your day be filled with beautiful moments.`,
              `Good Morning, ${username}. Here’s to a day of positive outcomes and joy.`,
              `Good Morning, ${username}. Wishing you a day as bright as your spirit.`,
              `Good Morning, ${username}. May you have a day filled with success and good news.`,
              `Good Morning, ${username}. Wishing you a peaceful and rewarding day.`,
              `Good Morning, ${username}. May your day be productive and fulfilling.`,
              `Good Morning, ${username}. Hope you have a day full of positive energy.`,
              `Good Morning, ${username}. Wishing you a splendid day ahead.`,
              `Good Morning, ${username}. May your day be filled with love and kindness.`,
              `Good Morning, ${username}. Hope you have a day that’s as amazing as you.`,
              `Good Morning, ${username}. Wishing you a day filled with new adventures.`,
              `Good Morning, ${username}. May today bring you joy and satisfaction.`,
              `Good Morning, ${username}. Wishing you a day full of inspiration and creativity.`,
              `Good Morning, ${username}. May your day be blessed with peace and prosperity.`,
              `Good Morning, ${username}. Hope your day is filled with wonderful surprises.`,
              `Good Morning, ${username}. Wishing you a joyful and successful day.`,
              `Good Morning, ${username}. May your day be as awesome as you are.`,
              `Good Morning, ${username}. Hope you have a day full of great achievements.`,
              `Good Morning, ${username}. Wishing you a day filled with positivity and success.`,
              `Good Morning, ${username}. May your day be bright and beautiful.`,
              `Good Morning, ${username}. Hope today is filled with happiness and laughter.`,
              `Good Morning, ${username}. Wishing you a day of peace and productivity.`,
              `Good Morning, ${username}. May your day be rewarding and enjoyable.`,
              `Good Morning, ${username}. Hope your day is as wonderful as your smile.`,
              `Good Morning, ${username}. Wishing you a day filled with good vibes and joy.`,
              `Good Morning, ${username}. May your day be blessed with happiness and success.`,
              `Good Morning, ${username}. Hope you have a day full of positive experiences.`,
              `Good Morning, ${username}. Wishing you a day of endless possibilities.`,
              `Good Morning, ${username}. May your day be filled with joy and excitement.`,
              `Good Morning, ${username}. Hope today brings you nothing but the best.`,
              `Good Morning, ${username}. Wishing you a delightful and productive day.`,
              `Good Morning, ${username}. May your day be full of good times and laughter.`,
              `Good Morning, ${username}. Hope you have a day that’s truly amazing.`,
              `Good Morning, ${username}. May today be your best day yet.`,
              `Good Morning, ${username}. Wishing you a day as special as you are.`,
              `Good Morning, ${username}. May you find happiness in every moment today.`,
              `Good Morning, ${username}. Hope you conquer all your goals today.`,
              `Good Morning, ${username}. Wishing you a wonderful start to your day.`,
              `Good Morning, ${username}. May your day be full of positive surprises.`,
              `Good Morning, ${username}. Wishing you a day that brings you joy and fulfillment.`,
              `Good Morning, ${username}. Hope you have a day full of new adventures.`,
              `Good Morning, ${username}. Wishing you a day filled with positive thoughts.`,
              `Good Morning, ${username}. May your day be as bright as the sun.`,
              `Good Morning, ${username}. Hope you have a peaceful and joyful day.`,
              `Good Morning, ${username}. Wishing you a day of great success and happiness.`,
              `Good Morning, ${username}. May today be filled with blessings for you.`,
              `Good Morning, ${username}. Hope you achieve everything you set out for today.`,
              `Good Morning, ${username}. Wishing you a fantastic and productive day.`,
              `Good Morning, ${username}. May your day be full of love and light.`,
              `Good Morning, ${username}. Hope today brings you endless joy.`,
              `Good Morning, ${username}. Wishing you a day of abundance and prosperity.`,
              `Good Morning, ${username}. May your day be filled with sweet moments.`,
              `Good Morning, ${username}. Hope you have a day as awesome as you are.`,
              `Good Morning, ${username}. Wishing you a day filled with great accomplishments.`,
              `Good Morning, ${username}. May your day be blessed with happiness and peace.`,
              `Good Morning, ${username}. Hope you find joy in every little thing today.`,
              `Good Morning, ${username}. Wishing you a day that’s just as wonderful as you.`,
              `Good Morning, ${username}. May today be the start of something amazing.`,
              `Good Morning, ${username}. Hope your day is filled with beautiful memories.`,
              `Good Morning, ${username}. Wishing you a day of love, laughter, and joy.`,
              `Good Morning, ${username}. May your day be filled with positive energy.`,
              `Good Morning, ${username}. Hope you have a day full of great experiences.`,
              `Good Morning, ${username}. Wishing you a day of endless opportunities.`,
              `Good Morning, ${username}. May today bring you lots of success.`,
              `Good Morning, ${username}. Hope you have a day as bright as your future.`,
              `Good Morning, ${username}. Wishing you a day filled with all good things.`,
              `Good Morning, ${username}. May your day be as amazing as you are.`,
              `Good Morning, ${username}. Hope you have a day full of exciting adventures.`,
              `Good Morning, ${username}. Wishing you a day of peace and joy.`,
              `Good Morning, ${username}. May your day be filled with positive outcomes.`,
              `Good Morning, ${username}. Hope you have a day that’s truly unforgettable.`,
              `Good Morning, ${username}. Wishing you a fantastic and joyous day.`,
              `Good Morning, ${username}. May your day be filled with success and happiness.`,
              `Good Morning, ${username}. Hope today brings you everything you desire.`,
              `Good Morning, ${username}. Wishing you a wonderful and prosperous day.`,
              `Good Morning, ${username}. May your day be as wonderful as you are.`,
              `Good Morning, ${username}. Hope you have a day full of great moments.`,
              `Good Morning, ${username}. Wishing you a day of pure happiness and joy.`
          ];
          return morningMessages[key]
      }
      
      const afternoonMessage = (username:string, key:number) => {
          const afternoonMessages = [
          `Good Afternoon, ${username}. Keep pushing forward and never give up.`,
          `Good Afternoon, ${username}. Believe in yourself and all that you are.`,
          `Good Afternoon, ${username}. The best way to predict the future is to create it.`,
          `Good Afternoon, ${username}. Stay positive, work hard, and make it happen.`,
          `Good Afternoon, ${username}. Your only limit is your mind.`,
          `Good Afternoon, ${username}. Keep going. You're getting there.`,
          `Good Afternoon, ${username}. Every day is a new opportunity to achieve your goals.`,
          `Good Afternoon, ${username}. Stay focused and never lose sight of your dreams.`,
          `Good Afternoon, ${username}. You're stronger than you think.`,
          `Good Afternoon, ${username}. Success is not for the lazy.`,
          `Good Afternoon, ${username}. Great things never come from comfort zones.`,
          `Good Afternoon, ${username}. Believe you can, and you're halfway there.`,
          `Good Afternoon, ${username}. Your hard work will pay off soon.`,
          `Good Afternoon, ${username}. Stay motivated and keep pushing forward.`,
          `Good Afternoon, ${username}. Don't stop until you're proud.`,
          `Good Afternoon, ${username}. The harder you work for something, the greater you'll feel when you achieve it.`,
          `Good Afternoon, ${username}. Dream it. Wish it. Do it.`,
          `Good Afternoon, ${username}. Success is the sum of small efforts repeated day in and day out.`,
          `Good Afternoon, ${username}. Don't watch the clock; do what it does. Keep going.`,
          `Good Afternoon, ${username}. Don't wait for opportunity. Create it.`,
          `Good Afternoon, ${username}. The secret of getting ahead is getting started.`,
          `Good Afternoon, ${username}. Push yourself because no one else is going to do it for you.`,
          `Good Afternoon, ${username}. Success doesn't come from what you do occasionally. It comes from what you do consistently.`,
          `Good Afternoon, ${username}. Your passion is waiting for your courage to catch up.`,
          `Good Afternoon, ${username}. Dream big and dare to fail.`,
          `Good Afternoon, ${username}. Don't be afraid to give up the good to go for the great.`,
          `Good Afternoon, ${username}. You are capable of amazing things.`,
          `Good Afternoon, ${username}. If it doesn't challenge you, it won't change you.`,
          `Good Afternoon, ${username}. Work hard in silence, let success make the noise.`,
          `Good Afternoon, ${username}. Your limitation—it's only your imagination.`,
          `Good Afternoon, ${username}. The key to success is to focus on goals, not obstacles.`,
          `Good Afternoon, ${username}. Dream big, stay positive, work hard, and enjoy the journey.`,
          `Good Afternoon, ${username}. Keep your face always toward the sunshine, and shadows will fall behind you.`,
          `Good Afternoon, ${username}. The future belongs to those who believe in the beauty of their dreams.`,
          `Good Afternoon, ${username}. You are braver than you believe, stronger than you seem, and smarter than you think.`,
          `Good Afternoon, ${username}. Don't count the days, make the days count.`,
          `Good Afternoon, ${username}. Challenges are what make life interesting, and overcoming them is what makes life meaningful.`,
          `Good Afternoon, ${username}. Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.`,
          `Good Afternoon, ${username}. Start where you are. Use what you have. Do what you can.`,
          `Good Afternoon, ${username}. Success is not final, failure is not fatal: It is the courage to continue that counts.`,
          `Good Afternoon, ${username}. The only limit to our realization of tomorrow will be our doubts of today.`,
          `Good Afternoon, ${username}. Believe you can and you're halfway there.`,
          `Good Afternoon, ${username}. The only way to achieve the impossible is to believe it is possible.`,
          `Good Afternoon, ${username}. Don’t let yesterday take up too much of today.`,
          `Good Afternoon, ${username}. It always seems impossible until it is done.`,
          `Good Afternoon, ${username}. Keep your eyes on the stars, and your feet on the ground.`,
          `Good Afternoon, ${username}. Hardships often prepare ordinary people for an extraordinary destiny.`,
          `Good Afternoon, ${username}. The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.`,
          `Good Afternoon, ${username}. Never give up, for that is just the place and time that the tide will turn.`,
          `Good Afternoon, ${username}. Don’t watch the clock; do what it does. Keep going.`
      ];
      
          return afternoonMessages[key]
      }
      
      
      const nightMessage = (username:string, key:number) => {
          const nightMessages = [
          `Good Night, ${username}. May your dreams be sweet and your rest be peaceful.`,
          `Good Night, ${username}. Relax and let the worries of the day fade away.`,
          `Good Night, ${username}. Sleep well and wake up refreshed.`,
          `Good Night, ${username}. May you have a restful and peaceful night.`,
          `Good Night, ${username}. Let the night bring you calm and tranquility.`,
          `Good Night, ${username}. Sleep tight and have sweet dreams.`,
          `Good Night, ${username}. May you wake up feeling rejuvenated and refreshed.`,
          `Good Night, ${username}. Relax, unwind, and have a peaceful sleep.`,
          `Good Night, ${username}. May your night be as peaceful as your soul.`,
          `Good Night, ${username}. Rest well and dream big.`,
          `Good Night, ${username}. May the night bring you restful sleep.`,
          `Good Night, ${username}. Close your eyes and drift into a world of sweet dreams.`,
          `Good Night, ${username}. Let the tranquility of the night soothe your soul.`,
          `Good Night, ${username}. May your sleep be deep and your dreams be bright.`,
          `Good Night, ${username}. Sleep peacefully and wake up rejuvenated.`,
          `Good Night, ${username}. May the night wash away your worries.`,
          `Good Night, ${username}. Drift off to sleep with peace in your heart.`,
          `Good Night, ${username}. May you find serenity and comfort in your sleep.`,
          `Good Night, ${username}. Sleep well and let the night heal your spirit.`,
          `Good Night, ${username}. May the stars guide you to a peaceful sleep.`,
          `Good Night, ${username}. Rest your mind and body, and wake up refreshed.`,
          `Good Night, ${username}. Let go of all the stress and embrace a peaceful night.`,
          `Good Night, ${username}. May your dreams be as sweet as you.`,
          `Good Night, ${username}. Sleep tight and wake up bright.`,
          `Good Night, ${username}. Relax and enjoy the serenity of the night.`,
          `Good Night, ${username}. May your sleep be undisturbed and peaceful.`,
          `Good Night, ${username}. Drift into a restful slumber and sweet dreams.`,
          `Good Night, ${username}. May the night bring you comfort and peace.`,
          `Good Night, ${username}. Rest well and wake up ready to conquer the day.`,
          `Good Night, ${username}. Let the calm of the night envelop you.`,
          `Good Night, ${username}. Sleep well and let your dreams be filled with happiness.`,
          `Good Night, ${username}. May you find peace and relaxation in your sleep.`,
          `Good Night, ${username}. Rest your head and sleep soundly.`,
          `Good Night, ${username}. Let the night bring you a blanket of calm.`,
          `Good Night, ${username}. May your dreams be filled with joy and peace.`,
          `Good Night, ${username}. Sleep deeply and wake up refreshed.`,
          `Good Night, ${username}. Let the night bring you peace and tranquility.`,
          `Good Night, ${username}. May your sleep be filled with soothing dreams.`,
          `Good Night, ${username}. Rest well and may the night bring you calm.`,
          `Good Night, ${username}. May you sleep peacefully and wake up with a smile.`,
          `Good Night, ${username}. Drift off to sleep and let the night rejuvenate you.`,
          `Good Night, ${username}. Let the quiet of the night bring you peace.`,
          `Good Night, ${username}. May you sleep soundly and dream sweetly.`,
          `Good Night, ${username}. Relax and let the night wash away your stress.`,
          `Good Night, ${username}. Sleep well and wake up ready for a new day.`,
          `Good Night, ${username}. May your dreams be pleasant and your rest be deep.`,
          `Good Night, ${username}. Drift into a peaceful slumber and let the night heal you.`,
          `Good Night, ${username}. May the night bring you serenity and comfort.`,
          `Good Night, ${username}. Sleep soundly and wake up refreshed and ready.`,
          `Good Night, ${username}. Let the peace of the night surround you.`,
          `Good Night, ${username}. May your sleep be undisturbed and restful.`,
          `Good Night, ${username}. Rest well and may your dreams be sweet.`,
          `Good Night, ${username}. May the tranquility of the night bring you peace.`,
          `Good Night, ${username}. Sleep well and wake up with renewed energy.`,
          `Good Night, ${username}. Let the calm of the night soothe your soul.`,
          `Good Night, ${username}. May you find comfort and peace in your sleep.`,
          `Good Night, ${username}. Drift off to sleep and let your dreams be sweet.`,
          `Good Night, ${username}. Rest well and let the night rejuvenate your spirit.`,
          `Good Night, ${username}. May the night bring you peaceful slumber.`,
          `Good Night, ${username}. Sleep soundly and wake up ready to shine.`,
          `Good Night, ${username}. Let the quiet of the night bring you serenity.`,
          `Good Night, ${username}. May your sleep be deep and refreshing.`,
          `Good Night, ${username}. Rest well and let the night bring you calm.`,
          `Good Night, ${username}. May your dreams be filled with peace and happiness.`,
          `Good Night, ${username}. Sleep tight and wake up feeling renewed.`,
          `Good Night, ${username}. Let the night bring you a blanket of comfort.`,
          `Good Night, ${username}. May your rest be peaceful and your dreams sweet.`,
          `Good Night, ${username}. Drift into a peaceful sleep and let the night heal you.`,
          `Good Night, ${username}. Sleep well and wake up with a smile.`,
          `Good Night, ${username}. May the tranquility of the night bring you peace and rest.`,
          `Good Night, ${username}. Rest well and let the night rejuvenate your spirit.`,
          `Good Night, ${username}. Let the night bring you a soothing calm.`,
          `Good Night, ${username}. May your sleep be undisturbed and peaceful.`,
          `Good Night, ${username}. Sleep soundly and let the night refresh your mind.`,
          `Good Night, ${username}. Rest well and wake up ready for a new day.`,
          `Good Night, ${username}. May the night bring you restful sleep and sweet dreams.`,
          `Good Night, ${username}. Drift into a deep sleep and let the night heal you.`,
          `Good Night, ${username}. Sleep tight and wake up feeling renewed and refreshed.`,
          `Good Night, ${username}. May the peace of the night bring you calm and comfort.`,
          `Good Night, ${username}. Rest well and let the night rejuvenate your soul.`,
          `Good Night, ${username}. Sleep soundly and wake up ready to conquer the day.`,
          `Good Night, ${username}. Let the tranquility of the night bring you peace and relaxation.`,
          `Good Night, ${username}. May your sleep be deep and your dreams be sweet.`,
          `Good Night, ${username}. Rest well and let the night refresh your spirit.`,
          `Good Night, ${username}. Sleep peacefully and wake up with a smile.`
      ];
      
      
          return nightMessages[key]
      }
      
      const eveningMessage = (username:string, key:number) => {
          const eveningMessages = [
          `Good Evening, ${username}. Unwind and relax, the night is still young.`,
          `Good Evening, ${username}. Take a moment to enjoy the calm of the evening.`,
          `Good Evening, ${username}. Let the cool breeze refresh your mind and body.`,
          `Good Evening, ${username}. May your evening be as beautiful as the sunset.`,
          `Good Evening, ${username}. Relax and unwind, you deserve it.`,
          `Good Evening, ${username}. Enjoy the tranquility of the evening.`,
          `Good Evening, ${username}. Breathe deeply and let go of the day's stress.`,
          `Good Evening, ${username}. Take time to appreciate the little moments.`,
          `Good Evening, ${username}. Let the evening bring you peace and joy.`,
          `Good Evening, ${username}. Sit back, relax, and enjoy the evening.`,
          `Good Evening, ${username}. May the evening bring you calm and serenity.`,
          `Good Evening, ${username}. Find peace in the quiet moments.`,
          `Good Evening, ${username}. Let the evening soothe your soul.`,
          `Good Evening, ${username}. Take a break and enjoy the calm of the night.`,
          `Good Evening, ${username}. The evening is a time to relax and rejuvenate.`,
          `Good Evening, ${username}. Embrace the beauty of the evening.`,
          `Good Evening, ${username}. Let the serenity of the evening wash over you.`,
          `Good Evening, ${username}. May the evening bring you peace and relaxation.`,
          `Good Evening, ${username}. Take a deep breath and unwind.`,
          `Good Evening, ${username}. Relax and let go of the day's worries.`,
          `Good Evening, ${username}. Enjoy the peaceful moments of the evening.`,
          `Good Evening, ${username}. The evening is a perfect time to reflect and relax.`,
          `Good Evening, ${username}. May your evening be filled with peace and tranquility.`,
          `Good Evening, ${username}. Take time to relax and enjoy the evening.`,
          `Good Evening, ${username}. The evening is a time to slow down and unwind.`,
          `Good Evening, ${username}. Enjoy the beauty of the evening sky.`,
          `Good Evening, ${username}. May the calm of the evening bring you peace.`,
          `Good Evening, ${username}. Relax and let the evening refresh your soul.`,
          `Good Evening, ${username}. Enjoy the stillness of the evening.`,
          `Good Evening, ${username}. May your evening be filled with relaxation and peace.`,
          `Good Evening, ${username}. Take time to unwind and enjoy the evening.`,
          `Good Evening, ${username}. Let the evening bring you calm and relaxation.`,
          `Good Evening, ${username}. Enjoy the cool breeze and the beauty of the night.`,
          `Good Evening, ${username}. May your evening be as relaxing as you need it to be.`,
          `Good Evening, ${username}. Find peace in the quiet of the evening.`,
          `Good Evening, ${username}. Let the calm of the evening wash over you.`,
          `Good Evening, ${username}. Enjoy the tranquility of the evening hours.`,
          `Good Evening, ${username}. Take a moment to relax and unwind.`,
          `Good Evening, ${username}. Let the beauty of the evening bring you peace.`,
          `Good Evening, ${username}. Enjoy the serenity of the night.`,
          `Good Evening, ${username}. May the evening bring you relaxation and peace.`,
          `Good Evening, ${username}. Take time to enjoy the calm of the evening.`,
          `Good Evening, ${username}. Relax and let the evening bring you peace.`,
          `Good Evening, ${username}. Enjoy the peaceful moments of the night.`,
          `Good Evening, ${username}. May your evening be filled with calm and relaxation.`,
          `Good Evening, ${username}. Take a break and enjoy the tranquility of the evening.`,
          `Good Evening, ${username}. The evening is a perfect time to relax and reflect.`,
          `Good Evening, ${username}. Enjoy the beauty and peace of the evening.`,
          `Good Evening, ${username}. May your evening be as peaceful as the night sky.`,
          `Good Evening, ${username}. Let the evening calm your mind and soothe your soul.`
      ];
      
      
          return eveningMessages[key]
      }
      const timeZone = getTimeZone()
      if (timeZone === "morning"){
          return morningMessage(username, key)
      } else if (timeZone==="evening") {
          return eveningMessage(username, key)
      } else if (timeZone==="afternoon") {
          return afternoonMessage(username, key)
      } else if (timeZone==="night") {
          return nightMessage(username, key)
      }
      
      }

  return {
      greeting
  }

}