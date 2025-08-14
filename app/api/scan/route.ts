import { NextRequest, NextResponse } from 'next/server';
import { scanner } from '../lib/axios-instances';
import { isAxiosError } from 'axios';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const address = searchParams.get('address');

    if (!address) {
        return NextResponse.json(
            { data: 'Address is needed',  status: 400, statusText: 'Bad Request' },
            { status: 400, statusText: 'Bad Request' })
    }

    try {
        const response = await scanner.get(`/scan/${address}`);
        console.log('Success')
        return NextResponse.json(
            { data: response.data, status: response.status, statusText: response.statusText }, 
            { status: response.status, statusText: response.statusText });
    } catch (error) {
        if (isAxiosError(error)) {
            console.log('Error')
            return NextResponse.json(
                { data: error.response?.data?.detail,  status: error.response?.status, statusText: error.response?.statusText },
                { status: error.response?.status, statusText: error.response?.statusText })
        }
        
        return NextResponse.json({ error }, { status: 500, statusText: 'Unknown Error'});
    }
}