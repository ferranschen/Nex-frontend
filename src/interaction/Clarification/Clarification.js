import React from 'react';

import { GenerateCodeButton } from 'ui/buttons'
import QuestionList from 'ui/interaction/QuestionList'
import { SectionTitle } from 'ui/titles';
export default function Clarification() {
    return (
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg hover:border-2 hover:border-gray-200 overflow-y-scroll">
            <SectionTitle title="Clarification Questions" />
            <div className="w-full mx-auto">
                <div className="p-4 border border-gray-300 sm:rounded-md">
                    <form method="POST" action="localhost:3000">
                        <QuestionList question={"What type of data is in your dataset?"} options={["Text", "Numerical", "Images", "Time Series", "Others"]} />
                        <QuestionList question={"What specific issues are present in your numerical data that need cleaning?"} options={["Missing values", "Outliers", "Inconsistent formatting", "Duplicate entries", "Others"]} />
                        <QuestionList question={"How would you like to handle the missing values in your numerical data?"} options={["Remove rows with missing values", "Fill with mean", "Fill with median", "Fill with a specific value", "Others"]} />

                        <div className="col-span-full">
                            <label for="about" className="block text-sm font-medium text-gray-700">Note</label>
                            <div className="mt-2">
                                <textarea id="about" name="about" rows="3" className=" p-2 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                            <p className="mt-1 text-sm text-gray-600">Write other clarification in the note.</p>
                        </div>

                        <div className="mb-6 mt-3">
                            <GenerateCodeButton />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}