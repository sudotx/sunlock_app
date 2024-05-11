import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/utils/helpers'

function Accordion() {
  return (
    <Disclosure>
      {({ open }) => (
        <>

          <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <h3 className="font-heading font-bold text-lg text-gray-900" contentEditable="false">Document embeddings</h3>
            <ChevronUpIcon
              className={`${open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <p className={classNames("mb-5 text-base text-gray-600 transition-all	delay-300 ease-in-ou")}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio possimus cum voluptate aut explicabo doloremque repellat obcaecati quo consectetur quaerat sunt in sit culpa quae, ex natus eaque voluptatum quam molestias hic perspiciatis? Soluta nesciunt nostrum ad velit consequuntur ducimus amet obcaecati quia. </p>
            </Disclosure.Panel>
          </Transition>
          <div className="mb-6 bg-gradient-cyan h-px" />
        </>
      )}
    </Disclosure>
  )
}

export default Accordion