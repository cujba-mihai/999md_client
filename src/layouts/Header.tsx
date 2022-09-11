import Link from '@/components/Link';
import Svg from '@/components/Svg';

const Header = () => (
    <div className='flex flex-col gap-3 mt-6'>
        <div className='flex container mx-auto align-middle place-items-center max-w-[1000px] md:pl-28 sm:justify-around' >
            <header className="relative container flex flex-1 justify-between items-center col-start-2">
                <div className='w-24 h-16 absolute top-4 -left-20'>
                    <Svg src='logo999.svg' alt='999.md' />
                </div>
                <div className='flex place-items-center gap-3 justify-center align-center'>
                    <button className='underline decoration-dashed relative hover:decoration-solid'>
                        <span className='text-xs align-middle' >Moldova</span>
                    </button>
                    <p className='text-gray-600 text-xs'>
                        <span className="text-xs">
                            astăzi 24 043 anunţuri
                        </span>
                    </p>
                    <strong className='flex align-middle justify-center'>
                        <Link text='Anunț de mărime dublă - noul serviciu de promovare pe 999' href='#' textStyles='text-xs' />
                    </strong>
                </div>
                <div className='flex gap-1'>
                    <Link text='înregistrare' href='#' textStyles='text-sm' />
                    <span className='text-gray-500 text-xs self-center'>•</span>
                    <Link text='autentificare' href='#' textStyles='text-sm' />
                </div>
            </header>
        </div>

        <div className="flex w-screen align-middle bg-gray-200 h-14">
            <menu className="flex container mx-auto  max-w-[1000px] sm:justify-around gap-5">
                <button className="grid col-start-8 col-span-2 justify-self-center ml-32 pl-2 place-items-center grid-cols-[13px_10px_70px] h-7 w-28 hover:bg-white rounded-[4px] self-center">
                    <Svg src='burger.svg' alt='Burger Menu Icon' className='col-start-1 w-4' />
                    <span className='col-start-3 text-sm'>Categorii</span>
                </button>
                <div className="flex w-3/5 relative col-start-11 col-span-12 h-[29px] self-center">
                    <input type="text" className='flex w-full border-1 border-gray-500 pl-2 h-full focus:outline-none focus:ring-1 focus:ring-blue-700 rounded-l-sm' placeholder='Cautare in anunturi' />
                    <button className="absolute grid place-items-center w-14 b-2 border-blue-700 border-solid h-7 right-0 bg-blue-700 rounded-r">
                        <Svg src='search.svg' alt='Search Icon' className='cursor-pointer brightness-200 text-sm' />
                    </button>
                </div>

                <button className="grid place-items-center col-start-24 col-span-4 w-44 h-7 bg-green-500 rounded self-center justify-self-center">
                    <span className='text-gray-50 text-sm'>Adaugă anunţ</span>
                </button>
            </menu>
        </div>
    </div>
);

export { Header };
