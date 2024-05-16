interface Schedule {
  time: string;
  activity: string;
}

interface DayPlan {
  day: number;
  schedule: Schedule[];
}

const parseSchedule = (input: string): DayPlan[] => {
  const days: DayPlan[] = [];
  const dayStrings = input.split(/Day \d+:/).slice(1); // Split by 'Day X:' and remove the first empty element

  dayStrings.forEach((dayString, index) => {
    const day: DayPlan = { day: index + 1, schedule: [] };
    const lines = dayString.trim().split("\n");
    lines.forEach((line) => {
      const match = line.match(/^(\d{1,2}:\d{2} (am|pm)) - (.+)$/);
      if (match) {
        const [_, time, , activity] = match;
        day.schedule.push({ time, activity });
      }
    });
    days.push(day);
  });

  return days;
};

export default parseSchedule;
