export interface MetaInfo {
    type: ioBroker.CommonType;
    role: string;
    unit?: string;
    writeName?: string;
    min?: number;
    max?: number;
    states?: Record<string | number, string>;
}

export const luxMeta: Record<string, Record<string, MetaInfo | undefined>> = {
    values: {
        temperature_supply: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_return: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_target_return: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_extern_return: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_hot_gas: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_outside: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_outside_avg: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_hot_water: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_hot_water_target: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_heat_source_in: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_heat_source_out: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_mixer1_flow: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_mixer1_target: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperaturw_RFV: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_mixer2_flow: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_mixer2_target: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_solar_collector: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_solar_storage: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_external_source: { role: 'value.temperature', type: 'number', unit: '°C' },
        ASDin: { role: 'value', type: 'number' },
        BWTin: { role: 'value', type: 'number' },
        EVUin: { role: 'value', type: 'number' },
        HDin: { role: 'value', type: 'number' },
        MOTin: { role: 'value', type: 'number' },
        NDin: { role: 'value', type: 'number' },
        PEXin: { role: 'value', type: 'number' },
        SWTin: { role: 'value', type: 'number' },
        AVout: { role: 'value', type: 'number' },
        BUPout: { role: 'value', type: 'number' },
        HUPout: { role: 'value', type: 'number' },
        MA1out: { role: 'value', type: 'number' },
        MZ1out: { role: 'value', type: 'number' },
        VENout: { role: 'value', type: 'number' },
        VBOout: { role: 'value', type: 'number' },
        VD1out: { role: 'value', type: 'number' },
        VD2out: { role: 'value', type: 'number' },
        ZIPout: { role: 'value', type: 'number' },
        ZUPout: { role: 'value', type: 'number' },
        ZW1out: { role: 'value', type: 'number' },
        ZW2SSTout: { role: 'value', type: 'number' },
        ZW3SSTout: { role: 'value', type: 'number' },
        FP2out: { role: 'value', type: 'number' },
        SLPout: { role: 'value', type: 'number' },
        SUPout: { role: 'value', type: 'number' },
        MZ2out: { role: 'value', type: 'number' },
        MA2out: { role: 'value', type: 'number' },
        defrostValve: { role: 'value', type: 'number' },
        hotWaterBoilerValve: { role: 'value', type: 'number' },
        heatingSystemCircPump: { role: 'indicator', type: 'boolean' },
        heatSourceMotor: { role: 'value', type: 'number' },
        compressor1: { role: 'value', type: 'number' },
        hotWaterCircPumpExtern: { role: 'value', type: 'number' },
        hours_compressor1: { role: 'value', type: 'number' },
        starts_compressor1: { role: 'value', type: 'number' },
        hours_compressor2: { role: 'value', type: 'number' },
        starts_compressor2: { role: 'value', type: 'number' },
        hours_2nd_heat_source1: { role: 'value', type: 'number' },
        hours_2nd_heat_source2: { role: 'value', type: 'number' },
        hours_2nd_heat_source3: { role: 'value', type: 'number' },
        hours_heatpump: { role: 'value', type: 'number' },
        hours_heating: { role: 'value', type: 'number' },
        hours_warmwater: { role: 'value', type: 'number' },
        hours_cooling: { role: 'value', type: 'number' },
        Time_WPein_akt: { role: 'value', type: 'number' },
        Time_ZWE1_akt: { role: 'value', type: 'number' },
        Time_ZWE2_akt: { role: 'value', type: 'number' },
        Timer_EinschVerz: { role: 'value', type: 'number' },
        Time_SSPAUS_akt: { role: 'value', type: 'number' },
        Time_SSPEIN_akt: { role: 'value', type: 'number' },
        Time_VDStd_akt: { role: 'value', type: 'number' },
        Time_HRM_akt: { role: 'value', type: 'number' },
        Time_HRW_akt: { role: 'value', type: 'number' },
        Time_LGS_akt: { role: 'value', type: 'number' },
        Time_SBW_akt: { role: 'value', type: 'number' },
        typeHeatpump: { role: 'text', type: 'string' },
        bivalentLevel: { role: 'value', type: 'number' },
        WP_BZ_akt: { role: 'value', type: 'number' },
        firmware: { role: 'text', type: 'string' },
        AdresseIP_akt: { role: 'info.ip', type: 'string' },
        SubNetMask_akt: { role: 'info.ip', type: 'string' },
        Add_Broadcast: { role: 'info.ip', type: 'string' },
        Add_StdGateway: { role: 'info.ip', type: 'string' },
        Comfort_exists: { role: 'value', type: 'number' },
        heatpump_state1: { role: 'value', type: 'number' },
        heatpump_state2: { role: 'value', type: 'number' },
        heatpump_state3: { role: 'value', type: 'number' },
        heatpump_duration: { role: 'value', type: 'number' },
        heatpump_state_string: { role: 'text', type: 'string' },
        heatpump_extendet_state_string: { role: 'text', type: 'string' },
        ahp_Stufe: { role: 'value', type: 'number' },
        ahp_Temp: { role: 'value', type: 'number' },
        ahp_Zeit: { role: 'value', type: 'number' },
        opStateHotWater: { role: 'value', type: 'number' },
        opStateHotWaterString: { role: 'text', type: 'string' },
        opStateHeating: { role: 'value', type: 'number' },
        opStateMixer1: { role: 'value', type: 'number' },
        opStateMixer2: { role: 'value', type: 'number' },
        Einst_Kurzprogramm: { role: 'value', type: 'number' },
        StatusSlave_1: { role: 'value', type: 'number' },
        StatusSlave_2: { role: 'value', type: 'number' },
        StatusSlave_3: { role: 'value', type: 'number' },
        StatusSlave_4: { role: 'value', type: 'number' },
        StatusSlave_5: { role: 'value', type: 'number' },
        rawDeviceTimeCalc: { role: 'date', type: 'string' },
        opStateMixer3: { role: 'value', type: 'number' },
        temperature_mixer3_target: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_mixer3_flow: { role: 'value.temperature', type: 'number', unit: '°C' },
        MZ3out: { role: 'value', type: 'number' },
        MA3out: { role: 'value', type: 'number' },
        FP3out: { role: 'value', type: 'number' },
        heatSourceDefrostTimer: { role: 'value', type: 'number' },
        Temperatur_RFV2: { role: 'value.temperature', type: 'number', unit: '°C' },
        Temperatur_RFV3: { role: 'value.temperature', type: 'number', unit: '°C' },
        SH_SW: { role: 'value', type: 'number' },
        Zaehler_BetrZeitSW: { role: 'value', type: 'number' },
        FreigabKuehl: { role: 'value', type: 'number' },
        AnalogIn: { role: 'value', type: 'number' },
        SonderZeichen: { role: 'value', type: 'number' },
        SH_ZIP: { role: 'value', type: 'number' },
        WebsrvProgrammWerteBeobarten: { role: 'value', type: 'number' },
        thermalenergy_heating: { role: 'value.power.consumption', type: 'number', unit: 'kWh' },
        thermalenergy_warmwater: { role: 'value.power.consumption', type: 'number', unit: 'kWh' },
        thermalenergy_pool: { role: 'value.power.consumption', type: 'number', unit: 'kWh' },
        thermalenergy_total: { role: 'value.power.consumption', type: 'number', unit: 'kWh' },
        analogOut1: { role: 'value', type: 'number' },
        analogOut2: { role: 'value', type: 'number' },
        Time_Heissgas: { role: 'value', type: 'number' },
        Temp_Lueftung_Zuluft: { role: 'value', type: 'number' },
        Temp_Lueftung_Abluft: { role: 'value', type: 'number' },
        hours_solar: { role: 'value', type: 'number' },
        analogOut3: { role: 'value', type: 'number' },
        analogOut4: { role: 'value', type: 'number' },
        Out_VZU: { role: 'value', type: 'number' },
        Out_VAB: { role: 'value', type: 'number' },
        Out_VSK: { role: 'value', type: 'number' },
        Out_FRH: { role: 'value', type: 'number' },
        AnalogIn2: { role: 'value', type: 'number' },
        AnalogIn3: { role: 'value', type: 'number' },
        SAXin: { role: 'value', type: 'number' },
        SPLin: { role: 'value', type: 'number' },
        Compact_exists: { role: 'value', type: 'number' },
        Durchfluss_WQ: { role: 'value', type: 'number' },
        LIN_exists: { role: 'value', type: 'number' },
        LIN_TUE: { role: 'value', type: 'number' },
        LIN_TUE1: { role: 'value', type: 'number' },
        LIN_VDH: { role: 'value', type: 'number' },
        LIN_UH: { role: 'value', type: 'number' },
        LIN_UH_Soll: { role: 'value', type: 'number' },
        LIN_HD: { role: 'value', type: 'number' },
        LIN_ND: { role: 'value', type: 'number' },
        LIN_VDH_out: { role: 'value', type: 'number' },
        flowRate: { role: 'value', type: 'number' },
        opStateHeatingString: { role: 'text', type: 'string' },
        errors: undefined,
        error_count: undefined,
        switch_off: undefined,
        NDin_pressure: { role: 'text', type: 'number' },
        HDin_pressure: { role: 'text', type: 'number' },
        temperature_overheating_target: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_overheating: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_compressor1_heating: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_intake_compressor1: { role: 'value.temperature', type: 'number', unit: 'K' },
        temperature_intake_evaporation: { role: 'value.temperature', type: 'number', unit: 'K' },
    },
    parameters: {
        heating_temperature: {
            role: 'value.temperature',
            type: 'number',
            unit: '°C',
            writeName: 'heating_target_temperature',
            min: -10,
            max: 10,
        },
        warmwater_temperature: {
            role: 'value.temperature',
            type: 'number',
            unit: '°C',
            writeName: 'temperature_hot_water_target',
            min: 30,
            max: 65,
        },
        heating_operation_mode: {
            role: 'value',
            type: 'number',
            writeName: 'heating_operation_mode',
            states: {
                0: 'Automatik',
                1: 'Zusatzheizung',
                2: 'Party',
                3: 'Ferien',
                4: 'Aus',
            },
        },
        warmwater_operation_mode: {
            role: 'value',
            type: 'number',
            writeName: 'warmwater_operation_mode',
            states: {
                0: 'Automatik',
                1: 'Zusatzheizung',
                2: 'Party',
                3: 'Ferien',
                4: 'Aus',
            },
        },
        heating_operation_mode_string: { role: 'text', type: 'string' },
        warmwater_operation_mode_string: { role: 'text', type: 'string' },
        heating_curve_end_point: {
            role: 'value.temperature',
            type: 'number',
            unit: '°C',
            writeName: 'heating_curve_end_point',
            min: 20,
            max: 55,
        },
        heating_curve_parallel_offset: {
            role: 'value.temperature',
            type: 'number',
            unit: '°C',
            writeName: 'heating_curve_parallel_offset',
            min: 15,
            max: 45,
        },
        deltaHeatingReduction: { role: 'value', type: 'number' },
        mk1_curve_end_point: {
            role: 'value.temperature',
            type: 'number',
            unit: '°C',
        },
        mk1_curve_parallel_offset: {
            role: 'value.temperature',
            type: 'number',
            unit: '°C',
        },
        deltaMk1Reduction: { role: 'value', type: 'number' },
        heatSourcedefrostAirThreshold: { role: 'value.temperature', type: 'number', unit: '°C' },
        hotWaterTemperatureHysteresis: {
            role: 'value.temperature',
            type: 'number',
            unit: 'K',
            writeName: 'hotwater_temperature_hysteresis',
        },
        returnTemperatureHysteresis: {
            role: 'value.temperature',
            type: 'number',
            unit: 'K',
            writeName: 'return_temperature_hysteresis',
        },
        heatSourcedefrostAirEnd: { role: 'value', type: 'number' },
        temperature_hot_water_target: { role: 'value.temperature', type: 'number', unit: '°C' },
        cooling_operation_mode: { role: 'value', type: 'number', writeName: 'cooling_operation_mode' },
        cooling_release_temperature: {
            role: 'value.temperature',
            type: 'number',
            unit: '°C',
            writeName: 'cooling_release_temp',
        },
        thresholdTemperatureSetBack: { role: 'value.temperature', type: 'number', unit: '°C' },
        cooling_inlet_temp: { role: 'value.temperature', type: 'number', unit: '°C', writeName: 'cooling_inlet_temp' },
        hotWaterCircPumpDeaerate: { role: 'indicator', type: 'boolean' },
        heatingLimit: { role: 'value', type: 'number' },
        thresholdHeatingLimit: { role: 'value.temperature', type: 'number', unit: '°C' },
        cooling_start_after_hours: { role: 'value', type: 'number', writeName: 'cooling_start' },
        cooling_stop_after_hours: { role: 'value', type: 'number', writeName: 'cooling_stop' },
        typeSerial: { role: 'text', type: 'string' },
        returnTemperatureTargetMin: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_hot_water_limit: { role: 'value.temperature', type: 'number', unit: '°C' },
        heating_system_circ_pump_voltage_nominal: {
            role: 'value.voltage',
            type: 'number',
            unit: 'V',
            writeName: 'heating_system_circ_pump_voltage_nominal',
        },
        heating_system_circ_pump_voltage_minimal: {
            role: 'value.voltage',
            type: 'number',
            unit: 'V',
            writeName: 'heating_system_circ_pump_voltage_minimal',
        },
        thermal_desinfection_continuous_operation: { role: 'value', type: 'number'},
        thermal_desinfection_on_sunday: { role: 'value', type: 'number'},
        thermal_desinfection_on_saturday: { role: 'value', type: 'number'},
        thermal_desinfection_on_friday: { role: 'value', type: 'number'},
        thermal_desinfection_on_thursday: { role: 'value', type: 'number'},
        thermal_desinfection_on_wednesday: { role: 'value', type: 'number'},
        thermal_desinfection_on_tuesday: { role: 'value', type: 'number'},
        thermal_desinfection_on_monday: { role: 'value', type: 'number'},
        runDeaerate: { role: 'indicator', type: 'string' },
        solarPumpDeaerate: { role: 'indicator', type: 'boolean' },
        hotwaterTemperatureForerun2ndCompressor: { role: 'value.temperature', type: 'number', unit: '°C' },
        heatingTemperatureOutside2ndCompressor: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_ZWE_possible: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_outdoor_min: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_outdoor_max: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_return_limit: { role: 'value.temperature', type: 'number', unit: '°C' },
        temperature_supply_limit: { role: 'value.temperature', type: 'number', unit: '°C' },
        // currently we ignore all timer tables
        heatingOperationTimerTableSelected: undefined,
        heatingOperationTimerTableSelectedString: undefined,
        heatingOperationTimerTableWeek: undefined,
        heatingOperationTimerTable52MonFri: undefined,
        heatingOperationTimerTable52SatSun: undefined,
        heatingOperationTimerTableDaySunday: undefined,
        heatingOperationTimerTableDayMonday: undefined,
        heatingOperationTimerTableDayTuesday: undefined,
        heatingOperationTimerTableDayWednesday: undefined,
        heatingOperationTimerTableDayThursday: undefined,
        heatingOperationTimerTableDayFriday: undefined,
        heatingOperationTimerTableDaySaturday: undefined,
        hotWaterOperationTimerTableSelected: undefined,
        hotWaterOperationTimerTableSelectedString: undefined,
        hotWaterOperationTimerTableWeek: undefined,
        hotWaterOperationTimerTable52MonFri: undefined,
        hotWaterOperationTimerTable52SatSun: undefined,
        hotWaterOperationTimerTableDaySunday: undefined,
        hotWaterOperationTimerTableDayMonday: undefined,
        hotWaterOperationTimerTableDayTuesday: undefined,
        hotWaterOperationTimerTableDayWednesday: undefined,
        hotWaterOperationTimerTableDayThursday: undefined,
        hotWaterOperationTimerTableDayFriday: undefined,
        hotWaterOperationTimerTableDaySaturday: undefined,
        hotWaterCircPumpTimerTableSelected: undefined,
        hotWaterCircPumpTimerTableSelectedString: undefined,
        hotWaterCircPumpTimerTableWeek: undefined,
        hotWaterCircPumpTimerTable52MonFri: undefined,
        hotWaterCircPumpTimerTable52SatSun: undefined,
        hotWaterCircPumpTimerTableDaySunday: undefined,
        hotWaterCircPumpTimerTableDayMonday: undefined,
        hotWaterCircPumpTimerTableDayTuesday: undefined,
        hotWaterCircPumpTimerTableDayWednesday: undefined,
        hotWaterCircPumpTimerTableDayThursday: undefined,
        hotWaterCircPumpTimerTableDayFriday: undefined,
        hotWaterCircPumpTimerTableDaySaturday: undefined,

        hotWaterCircPumpOnTime: { role: 'value', type: 'number', unit: 'min' },
        hotWaterCircPumpOffTime: { role: 'value', type: 'number', unit: 'min' },
    },
    additional: {
        reading_calculated_time_ms: undefined,
    },
};
