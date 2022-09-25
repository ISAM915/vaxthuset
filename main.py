def on_button_pressed_a():
    basic.show_leds("""
        # . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # . .
    """)
    basic.show_string("" + str(input.light_level()))
    basic.show_leds("""
        # # # . .
                . # . . .
                . # . . .
                . # . . .
                . # . . .
    """)
    basic.show_string("" + str(input.temperature()))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_leds("""
        . # # . .
                # . . . .
                . # . . .
                . . # . .
                # # . . .
    """)
    basic.show_string("" + str(input.sound_level()))
    basic.show_leds("""
        . # # . .
                # . . . .
                # . . . .
                # . . . .
                . # # . .
    """)
    basic.show_string("" + str(input.compass_heading()))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if input.light_level() < 150:
        pins.digital_write_pin(DigitalPin.P0, 1)
    elif input.light_level() > 149:
        pins.digital_write_pin(DigitalPin.P0, 0)
    if input.temperature() >= 30:
        pins.digital_write_pin(DigitalPin.P1, 1)
    elif input.temperature() < 30:
        pins.digital_write_pin(DigitalPin.P1, 0)
    if input.sound_level() < 150:
        pins.digital_write_pin(DigitalPin.P2, 0)
    elif input.sound_level() > 149:
        pins.digital_write_pin(DigitalPin.P2, 1)
    if input.compass_heading() < 80 :
        pins.digital_write_pin(DigitalPin.P3, 1)
    else:
        pins.digital_write_pin(DigitalPin.P3, 0)
basic.forever(on_forever)
