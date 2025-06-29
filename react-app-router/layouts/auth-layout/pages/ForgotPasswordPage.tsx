import { AuthLayout } from '@/layouts/auth-layout'
import { Button } from '@/components/button'
import { Field, Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Strong, Text, TextLink } from '@/components/text'
import { Logo } from '~/../logo'

export default function ForgotPasswordPage() {
    return (
        <AuthLayout>
            <form action="" method="POST" className="grid w-full max-w-sm grid-cols-1 gap-8">
                <Logo className="h-6 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]" />
                <Heading>Reset your password</Heading>
                <Text>Enter your email and we’ll send you a link to reset your password.</Text>
                <Field>
                    <Label>Email</Label>
                    <Input type="email" name="email" />
                </Field>
                <Button type="submit" className="w-full">
                    Reset password
                </Button>
                <Text>
                    Don’t have an account?{' '}
                    <TextLink href="/demos/auth/register">
                        <Strong>Sign up</Strong>
                    </TextLink>
                </Text>
            </form>
        </AuthLayout>
    )
}