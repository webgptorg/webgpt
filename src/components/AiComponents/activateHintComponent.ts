import styles from './activateHintComponent.module.css';

export function activateHintComponent(hintTarget: HTMLElement) {
    const hintText = hintTarget.getAttribute('title');
    if (!hintText) {
        throw new Error('Hint must have title attribute');
    }
    hintTarget.removeAttribute('title');

    const hintContainer = document.createElement('div');
    hintContainer.className = styles.container;

    const { top, left, width, height } = hintTarget.getBoundingClientRect();
    const right = document.body.clientWidth - left;
    const bottom = document.body.clientHeight - top;

    hintContainer.style.position = 'fixed';
    hintContainer.style.bottom = bottom - height / 2 + 'px';
    hintContainer.style.right = right + 'px';
    document.body.appendChild(hintContainer /* <- TODO: [🧠] Is this better to append in body or hintElement */);

    const hintTextElement = document.createElement('div');
    hintTextElement.className = styles.text;
    hintTextElement.textContent = hintText;
    hintContainer.appendChild(hintTextElement);

    const hintArrow = document.createElement('div');
    hintArrow.className = styles.arrow;
    hintContainer.appendChild(hintArrow);

    const hintHighlightElement = document.createElement('div');
    hintHighlightElement.className = styles.highlight;
    hintContainer.appendChild(hintHighlightElement);
    hintHighlightElement.style.position = 'fixed';
    hintHighlightElement.style.bottom = bottom + 'px';
    hintHighlightElement.style.right = right + 'px';
    hintHighlightElement.style.width = width + 'px';
    hintHighlightElement.style.height = height + 'px';

    /* 
    element.addEventListener('mouseenter', () => {
        hintContainer.style.opacity = '1';
    });

    element.addEventListener('mouseleave', () => {
        hintContainer.style.opacity = '0';
    });

    */
}

/**
 * TODO: !!!!! Hint: Placement
 * TODO: !!!!! Hint: Better design
 * TODO: !!!!! Hint: Fade after interaction
 * TODO: !!!!! Hint: Save number of interactions in localStorage and reapear on next load ONLY if less then 5 interationns
 * TODO: !!!!! Hint: Reapear (or put back title) after mouseover certain time
 * TODO: !!!!! Hint: data-ai-hint-highlight with the box and color
 * TODO: !!!!! Hint: data-ai-hint-after
 * TODO: !!!! ACRY use window.document, window.localStorage,...
 */
