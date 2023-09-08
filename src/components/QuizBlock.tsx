import {Badge, Checkbox, Flex, Group, Stack, Text} from "@mantine/core";
import {FC, useMemo} from "react";

type QuizBlockType = {
    title: string,
    checkboxes: checkbox[]
}

export const QuizBlock: FC<QuizBlockType>  = ({ title, checkboxes }) => {
    const defaultValues = useMemo(() => {
        const defaultValues: string[] = [];
        checkboxes.forEach((item) => item.isDefaultValue && defaultValues.push(item.value));

        return defaultValues;
    }, [checkboxes]);

    return (
        <Stack data-cy={'quizBlock'} style={{
            padding: '30px 60px',
        }}>
            <Text align={'start'} color={'black'} fz="xl">{title}</Text>
            <Checkbox.Group
                defaultValue={defaultValues}
            >
                <Group spacing="xl" grow >
                    <Flex
                        mih={50}
                        // bg="rgba(0, 0, 0, .3)"
                        gap="md"
                        justify="flex-start"
                        align="flex-start"
                        direction="column"
                        wrap="wrap"
                    >
                        {checkboxes.slice(0, 3).map((item) =>
                            <Flex>
                                <Checkbox
                                    value={item.value}
                                    label={item.label}
                                    color="green"
                                    size="md"
                                    disabled={item.isDisabled}
                                />
                                {item.isDisabled && <Badge color="red">Disabled</Badge>}
                            </Flex>
                        ) }
                    </Flex>
                    <Flex
                        mih={50}
                        // bg="rgba(0, 0, 0, .3)"
                        gap="md"
                        justify="flex-start"
                        align="flex-start"
                        direction="column"
                        wrap="wrap"
                    >
                        {checkboxes.slice(3, checkboxes.length).map((item) =>
                            <Flex>
                                <Checkbox
                                    value={item.value}
                                    label={item.label}
                                    color="green"
                                    size="md"
                                    disabled={item.isDisabled}
                                />
                                {item.isDisabled && <Badge color="red">Disabled</Badge>}
                            </Flex>
                        ) }
                    </Flex>
                </Group>
            </Checkbox.Group>
        </Stack>
    )
}
