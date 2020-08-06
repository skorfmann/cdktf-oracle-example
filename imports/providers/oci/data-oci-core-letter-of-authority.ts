// https://www.terraform.io/docs/providers/oci/r/data_oci_core_letter_of_authority.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "authorized_entity_name": {
        "type": "string",
        "computed": true
      },
      "circuit_type": {
        "type": "string",
        "computed": true
      },
      "cross_connect_id": {
        "type": "string",
        "required": true
      },
      "facility_location": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port_name": {
        "type": "string",
        "computed": true
      },
      "time_expires": {
        "type": "string",
        "computed": true
      },
      "time_issued": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciCoreLetterOfAuthorityConfig extends TerraformMetaArguments {
  readonly crossConnectId: string;
}

// Resource

export class DataOciCoreLetterOfAuthority extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreLetterOfAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_letter_of_authority',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._crossConnectId = config.crossConnectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_entity_name - computed: true, optional: false, required: true
  public get authorizedEntityName() {
    return this.getStringAttribute('authorized_entity_name');
  }

  // circuit_type - computed: true, optional: false, required: true
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
  }

  // cross_connect_id - computed: false, optional: false, required: true
  private _crossConnectId: string;
  public get crossConnectId() {
    return this._crossConnectId;
  }
  public set crossConnectId(value: string) {
    this._crossConnectId = value;
  }

  // facility_location - computed: true, optional: false, required: true
  public get facilityLocation() {
    return this.getStringAttribute('facility_location');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // port_name - computed: true, optional: false, required: true
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // time_expires - computed: true, optional: false, required: true
  public get timeExpires() {
    return this.getStringAttribute('time_expires');
  }

  // time_issued - computed: true, optional: false, required: true
  public get timeIssued() {
    return this.getStringAttribute('time_issued');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cross_connect_id: this._crossConnectId,
    };
  }
}
