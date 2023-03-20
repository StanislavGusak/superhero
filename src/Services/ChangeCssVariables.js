
export const ChangeCssVariables = (theme) => {
    const root = document.querySelector(':root');

    const cssVariables = ['header', 'bgimage'];

    cssVariables.forEach(element => {

        root.style.setProperty(

            `--theme-default-${element}`,
            `var(--theme-${theme}-${element})`
        );
    })
}

