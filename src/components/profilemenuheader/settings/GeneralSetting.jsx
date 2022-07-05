import React from 'react'
import { Stack, HStack, Button, Divider, Text, Tag, TagLabel, Heading, Select , Input } from '@chakra-ui/react'


const GeneralSetting = () => {
    return (
        <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'}>
            <Stack direction={'column'} spacing={'4'}>
                {/* Email  */}
                <Stack
                    border={'1px solid white'}
                    borderRadius={'xl'}
                    py={'3'}
                >
                    <Stack color={'white'} p={'6'}>
                        <HStack>
                            <Text>Email</Text>
                            <Tag
                                size={'sm'}
                                borderRadius="full"
                                variant="solid"
                                colorScheme="green"
                            >
                                <TagLabel>verified</TagLabel>
                            </Tag>
                        </HStack>
                        <Divider />
                        <Stack>
                            <Text>Email</Text>
                            <Input
                                w={'50%'}
                                color={'white'}
                                focusBorderColor="none"
                                bgColor={'#000000ed'}
                                borderRadius={'sm'}
                                borderColor={'gray'}
                                size="md"
                                fontWeight={'500'}
                                fontSize={'sm'}
                                placeholder="sohaibbutt57@gmail.com"
                            />
                        </Stack>
                    </Stack>

                    <Stack margin={'0px !important'}>
                        <Divider />
                        <Stack
                            direction={'row'}
                            justifyContent={'flex-end'}
                            pr={'3'}
                        >
                            <Button variant={'link'}>Resend Email</Button>
                            <Button size={'md'} variant={'solid'}>
                                {' '}
                                Save
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>

                {/* Phone */}
                <Stack
                    border={'1px solid white'}
                    borderRadius={'xl'}
                    py={'3'}
                >
                    <Stack color={'white'} p={'6'}>
                        <Text>Phone Number</Text>
                        <Text>
                            We only service areas that are listed in the available
                            country code list.
                        </Text>

                        <Divider />
                        <Stack>
                            <Text>Email</Text>
                            <Select width={'50%'}>
                                <option
                                    value="+1"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1 Canada{' '}
                                </option>
                                <option
                                    value="+7"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +7 Kazakhstan, Russian Federation{' '}
                                </option>
                                <option
                                    value="+20"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +20 Egypt{' '}
                                </option>
                                <option
                                    value="+27"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +27 South Africa{' '}
                                </option>
                                <option
                                    value="+30"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +30 Greece{' '}
                                </option>
                                <option
                                    value="+32"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +32 Belgium{' '}
                                </option>
                                <option
                                    value="+33"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +33 France{' '}
                                </option>
                                <option
                                    value="+34"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +34 Spain{' '}
                                </option>
                                <option
                                    value="+36"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +36 Hungary{' '}
                                </option>
                                <option
                                    value="+39"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +39 Italy{' '}
                                </option>
                                <option
                                    value="+40"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +40 Romania{' '}
                                </option>
                                <option
                                    value="+41"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +41 Switzerland{' '}
                                </option>
                                <option
                                    value="+43"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +43 Austria{' '}
                                </option>
                                <option
                                    value="+45"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +45 Denmark{' '}
                                </option>
                                <option
                                    value="+46"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +46 Sweden{' '}
                                </option>
                                <option
                                    value="+47"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +47 Norway{' '}
                                </option>
                                <option
                                    value="+48"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +48 Poland{' '}
                                </option>
                                <option
                                    value="+49"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +49 Germany{' '}
                                </option>
                                <option
                                    value="+51"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +51 Peru{' '}
                                </option>
                                <option
                                    value="+52"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +52 Mexico{' '}
                                </option>
                                <option
                                    value="+54"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +54 Argentina{' '}
                                </option>
                                <option
                                    value="+55"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +55 Brazil{' '}
                                </option>
                                <option
                                    value="+56"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +56 Chile{' '}
                                </option>
                                <option
                                    value="+57"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +57 Colombia{' '}
                                </option>
                                <option
                                    value="+58"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +58 Venezuela (Bolivarian Republic of){' '}
                                </option>
                                <option
                                    value="+60"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +60 Malaysia{' '}
                                </option>
                                <option
                                    value="+62"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +62 Indonesia{' '}
                                </option>
                                <option
                                    value="+63"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +63 Philippines{' '}
                                </option>
                                <option
                                    value="+64"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +64 New Zealand{' '}
                                </option>
                                <option
                                    value="+65"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +65 Singapore{' '}
                                </option>
                                <option
                                    value="+66"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +66 Thailand{' '}
                                </option>
                                <option
                                    value="+81"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +81 Japan{' '}
                                </option>
                                <option
                                    value="+82"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +82 Korea (Republic of){' '}
                                </option>
                                <option
                                    value="+84"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +84 Viet Nam{' '}
                                </option>
                                <option
                                    value="+86"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +86 China{' '}
                                </option>
                                <option
                                    value="+90"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +90 Turkey{' '}
                                </option>
                                <option
                                    value="+91"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +91 India{' '}
                                </option>
                                <option
                                    value="+92"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +92 Pakistan{' '}
                                </option>
                                <option
                                    value="+93"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +93 Afghanistan{' '}
                                </option>
                                <option
                                    value="+94"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +94 Sri Lanka{' '}
                                </option>
                                <option
                                    value="+95"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +95 Myanmar{' '}
                                </option>
                                <option
                                    value="+212"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +212 Morocco, Western Sahara{' '}
                                </option>
                                <option
                                    value="+213"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +213 Algeria{' '}
                                </option>
                                <option
                                    value="+216"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +216 Tunisia{' '}
                                </option>
                                <option
                                    value="+220"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +220 Gambia{' '}
                                </option>
                                <option
                                    value="+221"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +221 Senegal{' '}
                                </option>
                                <option
                                    value="+222"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +222 Mauritania{' '}
                                </option>
                                <option
                                    value="+223"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +223 Mali{' '}
                                </option>
                                <option
                                    value="+224"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +224 Guinea{' '}
                                </option>
                                <option
                                    value="+225"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +225 Côte d'Ivoire{' '}
                                </option>
                                <option
                                    value="+226"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +226 Burkina Faso{' '}
                                </option>
                                <option
                                    value="+227"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +227 Niger{' '}
                                </option>
                                <option
                                    value="+228"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +228 Togo{' '}
                                </option>
                                <option
                                    value="+229"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +229 Benin{' '}
                                </option>
                                <option
                                    value="+230"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +230 Mauritius{' '}
                                </option>
                                <option
                                    value="+232"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +232 Sierra Leone{' '}
                                </option>
                                <option
                                    value="+233"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +233 Ghana{' '}
                                </option>
                                <option
                                    value="+234"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +234 Nigeria{' '}
                                </option>
                                <option
                                    value="+235"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +235 Chad{' '}
                                </option>
                                <option
                                    value="+236"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +236 Central African Republic{' '}
                                </option>
                                <option
                                    value="+237"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +237 Cameroon{' '}
                                </option>
                                <option
                                    value="+238"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +238 Cabo Verde{' '}
                                </option>
                                <option
                                    value="+239"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +239 Sao Tome and Principe{' '}
                                </option>
                                <option
                                    value="+240"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +240 Equatorial Guinea{' '}
                                </option>
                                <option
                                    value="+241"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +241 Gabon{' '}
                                </option>
                                <option
                                    value="+242"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +242 Congo{' '}
                                </option>
                                <option
                                    value="+244"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +244 Angola{' '}
                                </option>
                                <option
                                    value="+245"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +245 Guinea-Bissau{' '}
                                </option>
                                <option
                                    value="+246"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +246 British Indian Ocean Territory{' '}
                                </option>
                                <option
                                    value="+248"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +248 Seychelles{' '}
                                </option>
                                <option
                                    value="+250"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +250 Rwanda{' '}
                                </option>
                                <option
                                    value="+251"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +251 Ethiopia{' '}
                                </option>
                                <option
                                    value="+253"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +253 Djibouti{' '}
                                </option>
                                <option
                                    value="+254"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +254 Kenya{' '}
                                </option>
                                <option
                                    value="+255"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +255 Tanzania, United Republic of{' '}
                                </option>
                                <option
                                    value="+256"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +256 Uganda{' '}
                                </option>
                                <option
                                    value="+257"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +257 Burundi{' '}
                                </option>
                                <option
                                    value="+258"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +258 Mozambique{' '}
                                </option>
                                <option
                                    value="+260"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +260 Zambia{' '}
                                </option>
                                <option
                                    value="+261"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +261 Madagascar{' '}
                                </option>
                                <option
                                    value="+262"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +262 Mayotte, Réunion{' '}
                                </option>
                                <option
                                    value="+264"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +264 Namibia{' '}
                                </option>
                                <option
                                    value="+265"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +265 Malawi{' '}
                                </option>
                                <option
                                    value="+266"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +266 Lesotho{' '}
                                </option>
                                <option
                                    value="+267"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +267 Botswana{' '}
                                </option>
                                <option
                                    value="+268"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +268 Swaziland{' '}
                                </option>
                                <option
                                    value="+269"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +269 Comoros{' '}
                                </option>
                                <option
                                    value="+290"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +290 Saint Helena, Ascension and Tristan da Cunha{' '}
                                </option>
                                <option
                                    value="+291"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +291 Eritrea{' '}
                                </option>
                                <option
                                    value="+297"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +297 Aruba{' '}
                                </option>
                                <option
                                    value="+298"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +298 Faroe Islands{' '}
                                </option>
                                <option
                                    value="+299"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +299 Greenland{' '}
                                </option>
                                <option
                                    value="+352"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +352 Luxembourg{' '}
                                </option>
                                <option
                                    value="+353"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +353 Ireland{' '}
                                </option>
                                <option
                                    value="+354"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +354 Iceland{' '}
                                </option>
                                <option
                                    value="+355"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +355 Albania{' '}
                                </option>
                                <option
                                    value="+356"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +356 Malta{' '}
                                </option>
                                <option
                                    value="+357"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +357 Cyprus{' '}
                                </option>
                                <option
                                    value="+358"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +358 Åland Islands, Finland{' '}
                                </option>
                                <option
                                    value="+359"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +359 Bulgaria{' '}
                                </option>
                                <option
                                    value="+370"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +370 Lithuania{' '}
                                </option>
                                <option
                                    value="+371"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +371 Latvia{' '}
                                </option>
                                <option
                                    value="+372"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +372 Estonia{' '}
                                </option>
                                <option
                                    value="+373"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +373 Moldova (Republic of){' '}
                                </option>
                                <option
                                    value="+374"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +374 Armenia{' '}
                                </option>
                                <option
                                    value="+376"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +376 Andorra{' '}
                                </option>
                                <option
                                    value="+377"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +377 Monaco{' '}
                                </option>
                                <option
                                    value="+378"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +378 San Marino{' '}
                                </option>
                                <option
                                    value="+379"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +379 Holy See{' '}
                                </option>
                                <option
                                    value="+380"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +380 Ukraine{' '}
                                </option>
                                <option
                                    value="+382"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +382 Montenegro{' '}
                                </option>
                                <option
                                    value="+383"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +383 Republic of Kosovo{' '}
                                </option>
                                <option
                                    value="+385"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +385 Croatia{' '}
                                </option>
                                <option
                                    value="+386"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +386 Slovenia{' '}
                                </option>
                                <option
                                    value="+387"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +387 Bosnia and Herzegovina{' '}
                                </option>
                                <option
                                    value="+389"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +389 Macedonia (the former Yugoslav Republic of){' '}
                                </option>
                                <option
                                    value="+423"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +423 Liechtenstein{' '}
                                </option>
                                <option
                                    value="+500"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +500 Falkland Islands (Malvinas){' '}
                                </option>
                                <option
                                    value="+501"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +501 Belize{' '}
                                </option>
                                <option
                                    value="+502"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +502 Guatemala{' '}
                                </option>
                                <option
                                    value="+503"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +503 El Salvador{' '}
                                </option>
                                <option
                                    value="+504"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +504 Honduras{' '}
                                </option>
                                <option
                                    value="+505"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +505 Nicaragua{' '}
                                </option>
                                <option
                                    value="+506"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +506 Costa Rica{' '}
                                </option>
                                <option
                                    value="+507"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +507 Panama{' '}
                                </option>
                                <option
                                    value="+508"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +508 Saint Pierre and Miquelon{' '}
                                </option>
                                <option
                                    value="+509"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +509 Haiti{' '}
                                </option>
                                <option
                                    value="+590"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +590 Guadeloupe, Saint Barthélemy, Saint Martin
                                    (French part){' '}
                                </option>
                                <option
                                    value="+591"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +591 Bolivia (Plurinational State of){' '}
                                </option>
                                <option
                                    value="+592"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +592 Guyana{' '}
                                </option>
                                <option
                                    value="+593"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +593 Ecuador{' '}
                                </option>
                                <option
                                    value="+594"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +594 French Guiana{' '}
                                </option>
                                <option
                                    value="+595"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +595 Paraguay{' '}
                                </option>
                                <option
                                    value="+596"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +596 Martinique{' '}
                                </option>
                                <option
                                    value="+597"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +597 Suriname{' '}
                                </option>
                                <option
                                    value="+598"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +598 Uruguay{' '}
                                </option>
                                <option
                                    value="+670"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +670 Timor-Leste{' '}
                                </option>
                                <option
                                    value="+672"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +672 Antarctica{' '}
                                </option>
                                <option
                                    value="+673"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +673 Brunei Darussalam{' '}
                                </option>
                                <option
                                    value="+674"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +674 Nauru{' '}
                                </option>
                                <option
                                    value="+675"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +675 Papua New Guinea{' '}
                                </option>
                                <option
                                    value="+676"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +676 Tonga{' '}
                                </option>
                                <option
                                    value="+677"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +677 Solomon Islands{' '}
                                </option>
                                <option
                                    value="+678"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +678 Vanuatu{' '}
                                </option>
                                <option
                                    value="+679"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +679 Fiji{' '}
                                </option>
                                <option
                                    value="+680"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +680 Palau{' '}
                                </option>
                                <option
                                    value="+681"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +681 Wallis and Futuna{' '}
                                </option>
                                <option
                                    value="+682"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +682 Cook Islands{' '}
                                </option>
                                <option
                                    value="+683"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +683 Niue{' '}
                                </option>
                                <option
                                    value="+685"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +685 Samoa{' '}
                                </option>
                                <option
                                    value="+686"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +686 Kiribati{' '}
                                </option>
                                <option
                                    value="+687"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +687 New Caledonia{' '}
                                </option>
                                <option
                                    value="+688"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +688 Tuvalu{' '}
                                </option>
                                <option
                                    value="+689"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +689 French Polynesia{' '}
                                </option>
                                <option
                                    value="+690"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +690 Tokelau{' '}
                                </option>
                                <option
                                    value="+691"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +691 Micronesia (Federated States of){' '}
                                </option>
                                <option
                                    value="+692"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +692 Marshall Islands{' '}
                                </option>
                                <option
                                    value="+852"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +852 Hong Kong{' '}
                                </option>
                                <option
                                    value="+853"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +853 Macao{' '}
                                </option>
                                <option
                                    value="+855"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +855 Cambodia{' '}
                                </option>
                                <option
                                    value="+856"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +856 Lao People's Democratic Republic{' '}
                                </option>
                                <option
                                    value="+880"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +880 Bangladesh{' '}
                                </option>
                                <option
                                    value="+886"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +886 Taiwan{' '}
                                </option>
                                <option
                                    value="+960"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +960 Maldives{' '}
                                </option>
                                <option
                                    value="+961"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +961 Lebanon{' '}
                                </option>
                                <option
                                    value="+962"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +962 Jordan{' '}
                                </option>
                                <option
                                    value="+965"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +965 Kuwait{' '}
                                </option>
                                <option
                                    value="+966"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +966 Saudi Arabia{' '}
                                </option>
                                <option
                                    value="+967"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +967 Yemen{' '}
                                </option>
                                <option
                                    value="+968"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +968 Oman{' '}
                                </option>
                                <option
                                    value="+970"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +970 Palestine, State of{' '}
                                </option>
                                <option
                                    value="+971"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +971 United Arab Emirates{' '}
                                </option>
                                <option
                                    value="+972"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +972 Israel{' '}
                                </option>
                                <option
                                    value="+973"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +973 Bahrain{' '}
                                </option>
                                <option
                                    value="+974"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +974 Qatar{' '}
                                </option>
                                <option
                                    value="+975"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +975 Bhutan{' '}
                                </option>
                                <option
                                    value="+976"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +976 Mongolia{' '}
                                </option>
                                <option
                                    value="+977"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +977 Nepal{' '}
                                </option>
                                <option
                                    value="+992"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +992 Tajikistan{' '}
                                </option>
                                <option
                                    value="+993"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +993 Turkmenistan{' '}
                                </option>
                                <option
                                    value="+994"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +994 Azerbaijan{' '}
                                </option>
                                <option
                                    value="+995"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +995 Georgia{' '}
                                </option>
                                <option
                                    value="+996"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +996 Kyrgyzstan{' '}
                                </option>
                                <option
                                    value="+998"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +998 Uzbekistan{' '}
                                </option>
                                <option
                                    value="+1242"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1242 Bahamas{' '}
                                </option>
                                <option
                                    value="+1246"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1246 Barbados{' '}
                                </option>
                                <option
                                    value="+1268"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1268 Antigua and Barbuda{' '}
                                </option>
                                <option
                                    value="+1284"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1284 Virgin Islands (British){' '}
                                </option>
                                <option
                                    value="+1473"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1473 Grenada{' '}
                                </option>
                                <option
                                    value="+1649"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1649 Turks and Caicos Islands{' '}
                                </option>
                                <option
                                    value="+1670"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1670 Northern Mariana Islands{' '}
                                </option>
                                <option
                                    value="+1721"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1721 Sint Maarten (Dutch part){' '}
                                </option>
                                <option
                                    value="+1758"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1758 Saint Lucia{' '}
                                </option>
                                <option
                                    value="+1767"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1767 Dominica{' '}
                                </option>
                                <option
                                    value="+1784"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1784 Saint Vincent and the Grenadines{' '}
                                </option>
                                <option
                                    value="+1809"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1809 Dominican Republic{' '}
                                </option>
                                <option
                                    value="+1868"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1868 Trinidad and Tobago{' '}
                                </option>
                                <option
                                    value="+1869"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1869 Saint Kitts and Nevis{' '}
                                </option>
                                <option
                                    value="+1876"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +1876 Jamaica{' '}
                                </option>
                                <option
                                    value="+4779"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +4779 Svalbard and Jan Mayen{' '}
                                </option>
                                <option
                                    value="+5997"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    +5997 Bonaire, Sint Eustatius and Saba{' '}
                                </option>
                            </Select>
                            <Text>Phone Number</Text>
                            <Input
                                w={'50%'}
                                color={'white'}
                                focusBorderColor="none"
                                bgColor={'#000000ed'}
                                borderRadius={'sm'}
                                borderColor={'gray'}
                                size="md"
                                fontWeight={'500'}
                                fontSize={'sm'}
                                placeholder="sohaibbutt57@gmail.com"
                            />
                        </Stack>
                    </Stack>

                    <Stack margin={'0px !important'}>
                        <Divider />
                        <Stack
                            direction={'row'}
                            justifyContent={'flex-end'}
                            pr={'3'}
                        >
                            <Button variant={'link'}>Verify</Button>
                            <Button size={'md'} variant={'solid'}>
                                {' '}
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default GeneralSetting