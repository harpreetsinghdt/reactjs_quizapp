# Reactjs - Quiz App

## useState

## useRef

## useEffect

## useCallback - cache the function to prevent auto update while re-rendering, update only when dependency updated

## setTimeout - clearTimeout

## setInterval - clearInterval

## props - destructuring

## rest operator

## Key Points to remember

```
JS array filter method
const skippedAnswers = userAnswers.filter((answer) => answer === null);
```

```
importing images before use so that build process must include them
import summaryImg from "../assets/quiz-complete.png";
```

```
	key update and  re-render the component as per requirement.
```

```
less use of useState hook, derived the value from existing state or data, compute the values not always use state.
```

```
use useRef hook to hold those values which required to be same after changing the state after re-rendering the component.
```

```
if possible merge the state to single state hook using array
```

```
always copy the current state before the state which using array or object as value:
setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
```

```
always check the position of code snippet in file where it should be placed to perform the desired computed value or results
```

```
if component has single prop then destructure to its core name directly
```

```
JS Math.round to round up the computed value
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
```

```
use css classes as derived value to update the UI as per required
	let cssClass = "user-answer";
	if (answer === null) {
		cssClass += " skipped";
	} else if (answer === QUESTIONS[index].answers[0]) {
		cssClass += " correct";
	} else {
		cssClass += " wrong";
	}
```

```
conditional rendering values
{answer ?? "Skipped"}
```

```
to sort ref value with array sort method also using JS Math.random in built function
const shuffedAnswers = useRef();
  if (!shuffedAnswers.current) {
    shuffedAnswers.current = [...answers];
    shuffedAnswers.current.sort(() => Math.random() - 0.5);
  }
```

```
JS map function to loop on array and print values
{shuffedAnswers.current.map((answer) => {})}
```

```
to button passing function with value to execute in parent component, also setting conditional disable state after clicking it
	<button
		onClick={() => onSelect(answer)}
		className={cssClass}
		disabled={answerState !== ""}
	>
```

```
handling side-effect function setTimeout with useEffect hook and updating it with depency changes also clearing out the setTimeout fn with  clearTimeout
useEffect(() => {
    const tmRef = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(tmRef);
    };
  }, [onTimeout, timeout]);
```

```
handling side-effect function setInterval with useEffect hook and  also clearing out the setInterval fn with clearInterval
useEffect(() => {
    const intRef = setInterval(() => {
      setRemainingTime((prevState) => prevState - 100);
    }, 100);
    return () => {
      clearInterval(intRef);
    };
  }, []);
```

```
using progress bar html element to show remainin time by passing max value and current value
<progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode}
    />
```
