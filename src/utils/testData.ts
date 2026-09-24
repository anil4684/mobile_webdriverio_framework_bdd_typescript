import fs from 'node:fs';
import path from 'node:path';

export function getTestData<T>(fileName: string): T {

    const filePath = path.join(
        process.cwd(),
        'src',
        'data',
        fileName
    );

    return JSON.parse(
        fs.readFileSync(filePath, 'utf-8')
    ) as T;
}