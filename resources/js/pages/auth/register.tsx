import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type RegisterForm = {
    name: string;
    email: string;
    dni: string;
    surnamep: string;
    surnamem: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        dni: '',
        surnamep: '',
        surnamem: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Crear una cuenta" description="Escriba sus datos para crear una cuenta">
            <Head title="Register" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                <div className="grid gap-2">
                        <Label htmlFor="dni">Documento de identidad</Label>
                        <Input
                            id="dni"
                            type="number"
                            required
                            autoFocus
                            min={10}
                            tabIndex={1}
                            autoComplete="dni"
                            value={data.dni}
                            onChange={(e) => setData('dni', e.target.value)}
                            disabled={processing}
                            placeholder="Número de cédula"
                        />
                        <InputError message={errors.dni} className="mt-2" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nombres</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={2}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Full name"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="surnamep">Apellido paterno</Label>
                        <Input
                            id="surnamep"
                            type="text"
                            required
                            autoFocus
                            tabIndex={3}
                            autoComplete="name"
                            value={data.surnamep}
                            onChange={(e) => setData('surnamep', e.target.value)}
                            disabled={processing}
                            placeholder="Apellido Paterno"
                        />
                        <InputError message={errors.surnamep} className="mt-2" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="surnamem">Apellido materno</Label>
                        <Input
                            id="surnamem"
                            type="text"
                            required
                            autoFocus
                            tabIndex={4}
                            autoComplete="name"
                            value={data.surnamem}
                            onChange={(e) => setData('surnamem', e.target.value)}
                            disabled={processing}
                            placeholder="Apellido Paterno"
                        />
                        <InputError message={errors.surnamem} className="mt-2" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={5}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="miemail@tracking.com"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={6}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Escriba una contraseña"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Confirmar contraseña</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={7}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Repita la contraseña"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Crear cuenta
                    </Button>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    ¿Ya tienes una cuenta?{' '}
                    <TextLink href={route('login')} tabIndex={6}>
                        Inicia sesión
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
