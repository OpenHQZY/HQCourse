// 匹配2022级课程的正则表达式
export const grade2022Regex =
  /\{\s*"class_name":\s*"[^"]+",\s*"grade":\s*"2022",.*?\},?/gs;

// 提取2022级课程数据的函数
export function extract2022Courses(jsonString: string): string[] {
  const matches = jsonString.match(grade2022Regex) || [];
  // 移除最后一个逗号（如果存在）
  return matches.map((match) =>
    match.endsWith(",") ? match.slice(0, -1) : match
  );
}

// 使用示例：
/*
const jsonString = `...你的完整JSON字符串...`;
const courses2022 = extract2022Courses(jsonString);
const coursesArray = courses2022.map(course => JSON.parse(course));
*/
