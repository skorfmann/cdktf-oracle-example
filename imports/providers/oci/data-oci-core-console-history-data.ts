// https://www.terraform.io/docs/providers/oci/r/data_oci_core_console_history_data.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "console_history_id": {
        "type": "string",
        "required": true
      },
      "data": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "length": {
        "type": "number",
        "optional": true
      },
      "offset": {
        "type": "number",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciCoreConsoleHistoryDataConfig extends TerraformMetaArguments {
  readonly consoleHistoryId: string;
  readonly length?: number;
  readonly offset?: number;
}

// Resource

export class DataOciCoreConsoleHistoryData extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreConsoleHistoryDataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_console_history_data',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._consoleHistoryId = config.consoleHistoryId;
    this._length = config.length;
    this._offset = config.offset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // console_history_id - computed: false, optional: false, required: true
  private _consoleHistoryId: string;
  public get consoleHistoryId() {
    return this._consoleHistoryId;
  }
  public set consoleHistoryId(value: string) {
    this._consoleHistoryId = value;
  }

  // data - computed: true, optional: false, required: true
  public get data() {
    return this.getStringAttribute('data');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number;
  public get length() {
    return this._length;
  }
  public set length(value: number | undefined) {
    this._length = value;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number;
  public get offset() {
    return this._offset;
  }
  public set offset(value: number | undefined) {
    this._offset = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      console_history_id: this._consoleHistoryId,
      length: this._length,
      offset: this._offset,
    };
  }
}
