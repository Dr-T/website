import * as React from 'react'

import { emailConfig } from '../config/email'
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from './_components'

export default function Layout({
  previewText,
  children,
}: {
  previewText: string
  children: React.ReactNode
}) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-zinc-50 pt-[32px] font-sans">
          <Container className="mx-auto my-[40px] w-[465px] max-w-[465px] rounded-2xl border border-solid border-zinc-100 bg-white px-[24px] py-[20px]">
            {children}
          </Container>

          <Container className="mx-auto mt-[32px] w-[465px]">
            <Hr className="mx-0 my-[20px] h-px w-full bg-zinc-100" />
            <Section>
              <Img
                src={`${emailConfig.baseUrl}/icon.png`}
                width="24"
                height="24"
                alt="安德"
                className="mx-auto my-0"
              />
              <Text className="text-center">
                <Link
                  href="https://me.tx88.eu.org"
                  className="text-zinc-700 underline"
                >
                  <strong>Xander Tang</strong>
                </Link>
                <br />
                产品经理、细节控、创业者
              </Text>
              <Text className="text-center">
                <Link
                  href="https://weibo.com/u/5753980712"
                  className="text-xs text-zinc-600 underline"
                >
                  微博
                </Link>{' '}
                |&nbsp;
                <Link
                  href="https://github.com/Dr-T"
                  className="text-xs text-zinc-600 underline"
                >
                  GitHub
                </Link>{' '}
                |&nbsp;
                <Link
                  href="https://space.bilibili.com/37729840"
                  className="text-xs text-zinc-600 underline"
                >
                  哔哩哔哩
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
