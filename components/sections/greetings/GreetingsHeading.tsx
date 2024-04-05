import React from 'react'
import HeadingXL from '@/components/utility/headings/HeadingXL'
import { FormattedMessage, useIntl } from 'react-intl'

export default function GreetingsHeading() {
    const intl = useIntl()
    const myName = intl.formatMessage({
        id: 'app.myName',
    })
    return (
        <div>
            <HeadingXL className="text-center md:text-start">
                <FormattedMessage
                    id="app.greetingFocusMessage"
                    defaultMessage="greetings here"
                    values={{
                        name: myName,
                        span1: (chunks) => <span>{chunks}</span>,
                        span2: (chunks) => <span>{chunks}</span>,
                        span3: (chunks) => <span>{chunks}</span>,
                        span4: (chunks) => (
                            <span className="underline decoration-primary underline-offset-[9px] md:underline-offset-[16px] xl:underline-offset-[19px]">
                                {chunks}
                            </span>
                        ),
                        br1: () => <br className="hidden md:max-xl:inline-block"></br>,
                        br2: () => <br className="hidden xl:inline-block"></br>,
                        br3: () => <br className="hidden md:max-xl:inline-block"></br>,
                        br4: () => <br className="md:max-xl:hidden"></br>,
                        br5: () => <br></br>,
                    }}
                ></FormattedMessage>
            </HeadingXL>
        </div>
    )
}
