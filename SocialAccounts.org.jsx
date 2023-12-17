import React from 'react'
import GeneralSettingsHeader from '../molecules/GeneralSettingsHeader.mol'
import BasicInfoInput from '../molecules/BasicInfoInput.mol'
import InputText from '../atoms/InputText'
import PrimaryBtn from '../atoms/PrimaryBtn'

function SocialAccounts() {
  return (
    <div className="flex flex-col gap-y-4 pt-6 pb-3.5 ps-6 pe-6 mt-6 w-full  border rounded-lg shadow-md">
    <GeneralSettingsHeader
      title="Social accounts"
      content="Let everyone know where they can find you."
    />

<BasicInfoInput title="Twitter">
        <InputText
          placeholder="Add Twitter Name"
          type="text"
          name="Twitter"
          
        />
      </BasicInfoInput>

      <BasicInfoInput title="Facebook">
        <InputText
          placeholder="Add Facebook Name"
          type="text"
          name="Facebook"
          
        />
      </BasicInfoInput>
      <BasicInfoInput title="Instagram">
        <InputText
          placeholder="Add Instagram Name"
          type="text"
          name="Instagram"
          
        />
      </BasicInfoInput>
      <BasicInfoInput title="Gitub">
        <InputText
          placeholder="Add Gitub Account"
          type="text"
          name="Gitub"
          
        />
      </BasicInfoInput>
      <BasicInfoInput title="Youtube">
        <InputText
          placeholder="Youtube"
          type="text"
          name="Youtube"
          
        />
      </BasicInfoInput>
      <BasicInfoInput title="Dribbble">
        <InputText
          placeholder="Dribbble"
          type="text"
          name="Dribbble"
          
        />
      </BasicInfoInput>

        <BasicInfoInput>
        <PrimaryBtn cls="w-[114px] h-[42px] justify-end">Save Social</PrimaryBtn>

        </BasicInfoInput>
      
    </div>
  )
}

export default SocialAccounts